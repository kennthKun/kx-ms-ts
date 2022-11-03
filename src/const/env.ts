/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 14:51:26
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-01 17:12:51
 * @FilePath: /kx-ms-ts/src/const/env.ts
 */
export const API_ENV: string = process.env.API_ENV || 'dev'



const MAINSYSTYPE = {
  dev: 'dev.ailieyun.com',
  test: 'test.ailieyun.com',
  pre: 'www.ailieyun.com',
  prod: 'www.ailieyun.com',
};

// // // 官网域名
export const HOMELINK = {
  dev: 'https://www.ailieyun.com/',
  test: 'https://www.ailieyun.com/',
  pre: 'https://www.ailieyun.com/',
  prod: 'https://www.ailieyun.com/',
}[API_ENV]

// export const SysType = () => {
//   const hostname = window.location.hostname;
//   if (hostname !== MAINSYSTYPE[API_ENV]) {
//     return 'platform'; // 平台
//   }
//   return 'customer'; // 客户
// };

