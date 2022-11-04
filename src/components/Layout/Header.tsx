/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 14:06:05
 * @FilePath: /ailieyun-ms/src/components/Layout/Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component } from 'react';
import { Layout } from 'antd';
import { RightOutlined } from "@ant-design/icons"
import styles from './Header.module.less';
import GlobalHeaderRight from "./RightContent"
const { Header } = Layout;
export default class HeaderCustom extends Component {
  // 退出登录
  logout = () => { };

  render() {
    const { toggle }: any = this.props;
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
              <RightOutlined style={{ fontSize: "10px", color: "#B6C2CD", margin: "0 5px" }} />
            </span>
          </div>
        </div>
        <GlobalHeaderRight />
      </Header>
    );
  }
}
