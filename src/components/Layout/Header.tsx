/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 11:35:48
 * @FilePath: /ailieyun-ms/src/components/Layout/Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react';
import { Layout, Menu, Avatar, Breadcrumb } from 'antd';
import {routerMenuMap} from "@/consts/breadcrumbPath"
import {RightOutlined} from "@ant-design/icons"
import styles from './Header.module.less';
const { Header } = Layout;
const { SubMenu } = Menu;
console.log(routerMenuMap)
export default class HeaderCustom extends Component {
  // 退出登录
  logout = () => { };

  render() {
    const { collapsed, toggle, username }:any = this.props;
    return (
      <Header className={styles.header}>
        <div className={styles.header_left}>
          <span className={styles.menu_item_icon}>
            <svg className="icon" aria-hidden="true" onClick={toggle}>
              <use xlinkHref={`#kx-qiehuanzhizidingyicaidan`}></use>
            </svg>
          </span>
          <div className={styles.breadcrumb_wapper}>
            <span className={styles.breadcrumb_icon}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#kx-buchongxinxi`}></use>
              </svg>
              <RightOutlined style={{fontSize:"10px",color:"#B6C2CD",margin:"0 5px"}}/>
            </span>
          </div>
        </div>
       
        <Menu mode="horizontal" className={styles.menu}>
          <SubMenu
            title={
              <span>
                <Avatar
                  className={styles.avatar}
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                />
                {username}
              </span>
            }
          >
            <Menu.Item key="logout" style={{ textAlign: 'center' }}>
              <span onClick={this.logout}>退出</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}
