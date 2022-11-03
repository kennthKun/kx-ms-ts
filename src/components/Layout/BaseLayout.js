/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 11:33:59
 * @FilePath: /kx-ms-ts/src/components/Layout/BaseLayout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Routes from '@/routes/subRoutes';
import { getToken, setToken } from '../../utils/filter';
import SiderCustom from './Sider.tsx';
import HeaderCustom from './Header.tsx';

const { Content } = Layout;

class BaseLayout extends Component {
  toggle = () => {
    const { collapsed } = this.props;
    const { updateState } = this.props;
    console.log(collapsed)
    updateState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.props;
    const name = getToken('username') || '管理员';

    return (
      <Layout className="ant-layout-has-sider" style={{ minHeight: '100%' }}>
        <SiderCustom collapsed={collapsed} path="/app/demo" />
        <Layout id="content" style={{ minHeight: '100vh' }}>
          <HeaderCustom collapsed={collapsed} toggle={this.toggle} username={name} />
          <Content
            style={{
              margin: '16px',
              background: '#ffffff',
              position: 'relative',
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { collapsed } = state.app;
  return {
    collapsed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateState: (params) => dispatch.app.updateState(params),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout);
