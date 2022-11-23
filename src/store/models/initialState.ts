/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 16:05:02
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 15:04:01
 * @FilePath: /ailieyun-ms/src/store/models/init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';
import {
  getLocaleStorage,
  setLocaleStorage,
  setSessionStorage,
} from '@/utils/cookie';
import { isNil } from 'lodash';
import { getRoleList, getTenantList, getUserInfo } from '@/services/login';
import { getApp } from '@/services/common/api';
import { HOMELINK } from '@/const/env';
import { getResourceListApi } from '@/services/common/sysResource';

const appStore = {
  state: {
    collapsed: false,
    TenantList: [],
    ResourceList: [],
    RoleList: [],
    settings: null,
    currentUser: null,
    loading: null,
    fetchUserInfo: null,
  },
  reducers: {
    updateState(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async getRoleListFun() {
      const res: any = await getRoleList();
      if (res?.code === 0 && res?.data) {
        let status = 0;
        for (const i of res?.data) {
          const role_data = JSON.parse(getLocaleStorage('ROLE_DATA') || '{}');
          if (i.roleId === role_data?.roleId) {
            status = 1;
            break;
          }
        }
        if (status === 0) {
          setLocaleStorage('ROLE_DATA', JSON.stringify(res?.data?.[0] || {}));
        }
        return res?.data;
      }
    },

    async getAppFun() {
      const res: any = await getApp();
      if (res?.code === 0) {
        if (!res?.data?.tenantId) {
          return;
        }
        setSessionStorage('APPID', res?.data?.appId);
        setLocaleStorage('TENANTID', res?.data?.tenantId);
      }
      return res
    },

    async getTenantListFun() {
      const res: any = await getTenantList();
      setLocaleStorage('TENANTIDLIST', JSON.stringify(res?.data));
      if (res?.code === 0 && res?.data) {
        let status = 0;
        for (const i of res?.data) {
          const TENANTID = getLocaleStorage('TENANTID');
          if (i.tenantId === TENANTID && !isNil(TENANTID)) {
            status = 1;
            break;
          }
        }
        if (res?.data?.length === 1 && status === 0) {
          setLocaleStorage('TENANTID', res?.data[0]?.tenantId);
        }
      }
      return res?.data;
    },

    async getResourceList() {
      try {
        const res: any = await getResourceListApi();
        return res?.data || [];
      } catch (error) {
      }
      return [];
    },

    async fetchUserInfo() {
      try {
        const msg: any = await getUserInfo();
        return msg.data;
      } catch (error) {

      }
      return {};
    }
  },
};

export default appStore;
