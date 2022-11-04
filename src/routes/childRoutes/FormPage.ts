/*
 * @Author: kennthKun c_kunx@163.com
 * @Date: 2022-11-03 13:55:21
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-03 13:55:47
 * @FilePath: /kx-ms-ts/src/routes/childRoutes/FormPage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  {
    path: '/workBench/FormPage',
    name: "表单模版",
    component: () => import('@/views/FormPage'),
  }
];
