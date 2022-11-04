/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:56:52
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 15:03:24
 * @FilePath: /kx-ms-ts/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DEFAULT_ID } from '@/const';
import { getCookie, getLocaleStorage, getSessionStorage } from '@/utils/cookie';

// 手机号脱敏
export const changePhoneType = (value: string) => {
  if (value) {
    const tells = value;
    const tellPatern = /(\d{3})\d*(\d{4})/;
    const phone = tells.replace(tellPatern, '$1****$2');
    return phone;
  } else {
    return '';
  }
};

export function getHeaders() {
  const token = getCookie('AILIEYUN_ACCESS_TOKEN');
  const ROLE_DATA = getLocaleStorage('ROLE_DATA') || '{}';
  return {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
    dept_id: JSON.parse(ROLE_DATA)?.deptId || '',
    role_id: JSON.parse(ROLE_DATA)?.roleId || '',
    app_id: getSessionStorage('APPID') || DEFAULT_ID?.APPID,
    tenant_id: getLocaleStorage('TENANTID') || DEFAULT_ID?.TENANT_ID,
    Domain: window.location.hostname,
  };
}

// 根据属性值查询数组对象
export const keySearchObj = (arr: Object[] = [], key: any, value: any): any => {
  const keysValue = arr?.map((item: any) => {
    return item[key];
  });
  const keyIndex = keysValue?.indexOf(value);
  return arr[keyIndex] || {};
};