export default [
  {
    path: '/workBench/SystemSet',
    name: "系统设置",
    component: () => import('@/views/WorkBench'),
  },
  {
    path: '/workBench/SystemSet/PersonalSet',
    name: "个人设置",
    component: () => import('@/views/SystemSet/PersonalSet'),
  }
];