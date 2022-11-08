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
import HeaderCustom from './Header.js';
const { Content } = Layout;


const BaseLayout = () => {

  return (
    <Layout className="ant-layout-has-sider" style={{ minHeight: '100%' }}>
      <Layout id="content" style={{ minHeight: '100vh' }}>
        <HeaderCustom />
        <Content
          style={{
            margin: '16px 54px',
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
