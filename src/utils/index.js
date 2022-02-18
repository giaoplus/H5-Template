// 模拟获取活动状态并返回对应路由
export function getActivity() {
  let route = [{
    path: '/',
    component: () => import('@/pages/activity/Activity.vue'),
    name: 'activity'
  },{
    path: '/finish',
    component: () => import('@/pages/error/Finish.vue'),
    name: 'finish'
  },{
    path: '/before',
    component: () => import('@/pages/error/Before.vue'),
    name: 'before'
  }]
  return ['running', route]
}