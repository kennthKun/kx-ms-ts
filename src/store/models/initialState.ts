import {
  getLocaleStorage,
  setLocaleStorage,
  setSessionStorage,
} from '@/utils/cookie';
import { isNil } from 'lodash';
import { getRoleList, getTenantList, getUserInfo } from '@/services/login';
import { getApp } from '@/services/common/api';
import { DeepKeySearchObjDel } from "@/utils"
import { getResourceListApi } from '@/services/common/sysResource';
import { SYSYTYPE } from '@/const';

const initialState = {
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
        const RoleList = res?.data || [];
        const { updateState } = this as any
        updateState({ RoleList })
        return res?.data;
      }
    },

    async getAppFun() {
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
        setLocaleStorage('TENANTTYPE', type)
        if (!getLocaleStorage("TENANTID")) {
          setLocaleStorage('TENANTID', tenantId);
        }
        return res
      }
      return false
    },

    async getTenantListFun() {
      const res: any = await getTenantList();
      setLocaleStorage('TENANTIDLIST', JSON.stringify(res?.data));
      if (res?.code === 0 && res?.data) {
        let status = 0;
        const TENANTID = getLocaleStorage('TENANTID');
        for (const i of res?.data) {
          if (i.tenantId === TENANTID && !isNil(TENANTID)) {
            status = 1;
            break;
          }
        }
        if (res?.data?.length === 1 && status === 0 && !TENANTID) {
          setLocaleStorage('TENANTID', res?.data[0]?.tenantId);
        }
      }
      const TenantList = res?.data || [];
      const { updateState } = this as any
      updateState({ TenantList })
      return TenantList
    },

    async getResourceList() {
      try {
        const res: any = await getResourceListApi();
        const ResourceList = res?.data || [];
        const { updateState } = this as any
        const { arr, keyArr }: any = DeepKeySearchObjDel(ResourceList, 'routes', 'type', 3)
        setSessionStorage("BUTTON_ROLE", JSON.stringify(keyArr))
        updateState({ ResourceList: arr })
      } catch (error) {
      }
    },

    async fetchUserInfo() {
      try {
        const msg: any = await getUserInfo();
        const currentUser = msg.data;
        const { updateState } = this as any
        updateState({ currentUser })
      } catch (error) { }
    }
  },
};

export default initialState;
