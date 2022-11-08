/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:52:04
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-03 14:48:06
 * @FilePath: /ailieyun-ms/src/routes/subRoutes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../components/Layout/404';
import LazyComponent from './LazyComponent';
import PrivateRoute from './PrivateRoute';

// 自动引入childRoutes目录里的子路由
const files = require.context('./childRoutes', false, /\.ts/);
const routeList = [];
files.keys().forEach((key) => {
  const child = files(key).default;
  routeList.push(...child);
});

const SubRoute = () => {
  return (
    <Switch>
      {routeList.map((value) => {
        return (
          <PrivateRoute
            exact
            path={value.path}
            key={value.path}
            component={LazyComponent(value.component)}
          />
        );
      })}
      <Route component={NoMatch} key="noMatch" />
    </Switch>
  );
};

export { routeList };
export default SubRoute;
