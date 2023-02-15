/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-10-30 19:14:23
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 10:13:13
 * @FilePath: /kx-ms/src/routes/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NoMatch from '../components/Layout/404';
import LazyComponent from './LazyComponent';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// 不带左侧栏的路由页面
const RoutesData = [
  {
    path: '/',
    redirect: '/workBench/page'
  },
  {
    path: '/workBench',
    component: () => import('@/components/Layout/BaseLayout')
  },
  // 登录页面
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  // 用户协议
  {
    path: '/user/protocol',
    component: () => import('@/views/Login/components/protocol')
  },
  // 隐私策略
  {
    path: '/privacy/policy',
    component: () => import('@/views/Login/components/policy')
  }
];

const Routes = () => {
  const history = useHistory();
  const { initialState } = useDispatch();

  const init = async () => {
    await initialState?.getTenantListFun?.();
    await initialState?.getRoleListFun?.();
    await initialState?.getResourceList?.();
    await initialState?.fetchUserInfo?.();
  };

  useEffect(() => {
    if (!['/privacy/policy', '/login', '/user/protocol'].includes(history.location.pathname)) {
      init();
    }
  }, []);

  return (
    <Switch>
      {RoutesData.map(item => {
        if (item.redirect) {
          return <Route path={item.path} render={() => <Redirect to={item.redirect} />} exact key={item.path} />;
        }

        return <Route path={item.path} component={LazyComponent(item.component)} exact={item.exact} key={item.path} />;
      })}
      <Route component={NoMatch} key='noMatch' />
    </Switch>
  );
};

export default Routes;
