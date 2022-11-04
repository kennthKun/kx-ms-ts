/*
 * @Author: kennthKun c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 14:53:02
 * @FilePath: /kx-ms-ts/src/components/Layout/BaseLayout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout } from 'antd';
import Routes from '@/routes/subRoutes';
import SiderCustom from './Sider.tsx';
import HeaderCustom from './Header.tsx';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
const { Content } = Layout;

const BaseLayout = () => {
  const { initStore } = useDispatch();
  const { collapsed } = useSelector(({ initStore }) => initStore);
  const toggle = () => {
    initStore.updateState({ collapsed: !collapsed })
  };

  const getInit = async () => {
    const currentUser = await initStore?.fetchUserInfo?.();
    const TenantList = await initStore?.getTenantListFun?.();
    const RoleList = await initStore?.getRoleListFun?.();
    const ResourceList = await initStore?.getResourceList?.();
    initStore.updateState({ currentUser, TenantList, RoleList, ResourceList })
  }
  useEffect(() => {
    getInit()
  }, [])

  return (
    <Layout className="ant-layout-has-sider" style={{ minHeight: '100%' }}>
      <SiderCustom collapsed={collapsed} path="/app/demo" />
      <Layout id="content" style={{ minHeight: '100vh' }}>
        <HeaderCustom collapsed={collapsed} toggle={toggle} username={name} />
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
  )
}

export default BaseLayout;
