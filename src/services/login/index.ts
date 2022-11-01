/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 14:50:36
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-01 14:58:51
 * @FilePath: /kx-ms-ts/src/services/login/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DEFAULT_ID, API } from "@/const"
import { getLocaleStorage, getSessionStorage } from '@/utils/cookie';
import request from '@/utils/request';

/** 发送验证码  */
export async function getFakeCaptcha(phone?: string) {
  return request.post(`${API.auth}/sms/send/${phone}`);
}



/** 登录接口 POST */
export async function postLogin({ phone, principal }: any) {
  return request.post(
    `${API.auth}/oauth/login?grant_type=mobile&tenant_id=${getLocaleStorage('TENANTID') || DEFAULT_ID.TENANT_ID
    }&client_id=${getSessionStorage('APPID') || DEFAULT_ID.APPID
    }&phone=${phone}&principal=${principal}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

// 查询用户信息  app_id tenant_id
export async function getUserInfo() {
  return request.get(`${API.custom}/sysUser/getUser`);
}

// 查询当前用户角色列表 app_id tenant_id
export async function getRoleList() {
  return request.get(`${API.custom}/sysUserRelation/getRelationList`);
}

// 查询用户所属租户接口
export async function getTenantList() {
  return request.get(`${API.custom}/sysTenant/getTenantList`);
}
