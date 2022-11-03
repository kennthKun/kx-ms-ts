/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 17:14:19
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 10:11:17
 * @FilePath: /ailieyun-ms/src/routes/childRoutes/workBench.ts
 */
export default [
  {
    path: '/workBench/page',
    name: "工作台",
    component: () => import('@/views/WorkBench'),
  }
];
