// import { request } from '@umijs/max';
import { DEFAULT_ID, API } from '@/const';
import { getLocaleStorage, getSessionStorage } from '@/utils/cookie';
import request from '@/utils/request';

/** 发送验证码  */
export async function getFakeCaptcha(phone?: string) {
  return request(`${API.auth}/sms/send/${phone}`, {
    method: 'POST',
  });
}

/** 登录接口 POST */
export async function postLogin({ phone, principal }: any) {
  return request(
    `${API.auth}/oauth/login?grant_type=mobile&tenant_id=${getLocaleStorage('TENANTID') || DEFAULT_ID.TENANT_ID
    }&client_id=${getSessionStorage('APPID') || DEFAULT_ID.APPID
    }&phone=${phone}&principal=${principal}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

// 查询用户信息  app_id tenant_id
export async function getUserInfo() {
  return request(`${API.custom}/sysUser/getUser`, { method: 'GET' });
}

// 查询当前用户角色列表 app_id tenant_id
export async function getRoleList() {
  return request(`${API.custom}/sysUserRelation/getRelationList`, { method: 'GET' });
}

// 查询用户所属租户接口
export async function getTenantList() {
  return request(`${API.custom}/sysTenant/getTenantList`, { method: 'GET' });
}
