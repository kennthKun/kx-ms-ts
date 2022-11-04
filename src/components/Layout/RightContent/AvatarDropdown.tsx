/*
 * @Author: kennthKun c_kunx@163.com
 * @Date: 2022-11-04 11:44:59
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 12:00:15
 * @FilePath: /kx-ms-ts/src/components/Layout/RightContent/AvatarDropdown.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { outLogin } from '@/services/ant-design-pro/api';
import Icon, { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

import { Avatar, Menu, Spin } from 'antd';
import type { ItemType } from 'antd/lib/menu/hooks/useItems';
// import { stringify } from 'querystring';
import {
  clearCookie,
  removeLocaleStorage,
  removeSessionStorage,
  setLocaleStorage,
} from '@/utils/cookie';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback } from 'react';
import styles from './index.module.less';

// import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const defaultAvatar =
  'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png';


const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  /**
 * 退出登录，并且将当前的 url 保存
 */
  const loginOut = async () => {
    // await outLogin();
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    clearCookie('AILIEYUN_ACCESS_TOKEN');
    removeSessionStorage('APPID');
    removeLocaleStorage('TENANTID');
    removeLocaleStorage('ROLE_DATA');
    if (window.location.pathname !== '/user/login' && !redirect) {
      // history.replace({
      //   pathname: '/user/login',
      //   // search: stringify({
      //   //   redirect: pathname + search,
      //   // }),
      // });
    }
  };

  return (
    <Menu
      mode="horizontal"
      className={styles.menu}
      items={
        [
          {
            label: <span>
              <Avatar
                className={styles.avatar}
                src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
              />
              {/* {username} */}
            </span>,
            key: "submenu",
            children: [{
              label: <div style={{ textAlign: 'center' }} onClick={loginOut}>退出</div>,
              key: 'submenu-item-1',
            }],
          }
        ]
      }
    >
    </Menu>
  );
};

export default AvatarDropdown;
