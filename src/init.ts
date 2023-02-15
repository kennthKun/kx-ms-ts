import { getLocaleStorage } from './utils/cookie';
import { SYSYTYPE } from '@/const/index';
import { getUrlParam } from "@/utils"
import { getApp, shareToken } from '@/services/common/api';
import {
  setLocaleStorage,
  setSessionStorage,
  setCookie
} from '@/utils/cookie';
const loginPath = '/login';

const getAppFun = async () => {
  const res: any = await getApp();
  if (res?.code === 0) {
    if (!res?.data?.tenantId) {
      return;
    }
    let tenantId = res?.data?.tenantId
    let type = res?.data?.type
    if (getLocaleStorage('TENANTID')) {
      tenantId = getLocaleStorage('TENANTID')
    }
    if (res?.data?.appId === tenantId) {
      // 平台端
      setLocaleStorage('SYSTYPE', SYSYTYPE.PLATFORM);
    } else {
      // 货主端
      setLocaleStorage('SYSTYPE', SYSYTYPE.CUSTOMER);
    }
    setLocaleStorage('APPID', res?.data?.appId);
    setLocaleStorage('TENANTTYPE', type) // 正式 ｜ 体验客户
    if (!getLocaleStorage('TENANTID')) {
      setLocaleStorage('TENANTID', tenantId);
    }
    return res
  }
  return false
}

export default async (callback: () => void) => {
  const shareKey = getUrlParam('share')

  if (window.location.pathname !== loginPath) {
    await getAppFun();
  }
  if (shareKey) {
    const key = window.atob(shareKey)
    const res: any = await shareToken(key)
    if (res.code === 0) {
      setCookie('AILIEYUN_ACCESS_TOKEN', `bearer share:${res.data}`, 7);
    } else {
      window.location.href = '/login'
    }
  }
  callback()
}