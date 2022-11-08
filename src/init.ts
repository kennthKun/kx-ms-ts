import { getUrlParam } from "./utils"
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
    setSessionStorage('APPID', res?.data?.appId);
    setLocaleStorage('TENANTID', res?.data?.tenantId);
  }
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