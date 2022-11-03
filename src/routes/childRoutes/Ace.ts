/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-02 14:11:01
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 14:11:21
 * @FilePath: /ailieyun-ms/src/routes/childRoutes/Ace.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  {
    path: '/workBench/Ace',
    name: "工作台",
    component: () => import('@/views/Ace'),
  }
];
