import { SetIcon, OutLoginIcon } from "./Icon"
import { Avatar } from 'kx_component';
// import { stringify } from 'querystring';
import {
  clearCookie,
  removeLocaleStorage,
  removeSessionStorage,
} from '@/utils/cookie';
import React from 'react';
import styles from './index.module.less';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

// import styles from './index.less';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const defaultAvatar =
  'http://lieyuntong-file.oss-cn-beijing.aliyuncs.com/517c4750-c4c2-4a2b-beed-2ce444f9ac00.jpg';


const loginOut = async ({ history }: any) => {
  // await outLogin();
  const urlParams = new URL(window.location.href).searchParams;
  /** 此方法会跳转到 redirect 参数所在的位置 */
  const redirect = urlParams.get('redirect');
  clearCookie('AILIEYUN_ACCESS_TOKEN');
  removeLocaleStorage('APPID');
  removeLocaleStorage('TENANTID');
  removeLocaleStorage('ROLE_DATA');
  if (window.location.pathname !== '/login' && !redirect) {
    history.replace({
      pathname: '/login',
    });
  }
};



const AvatarDropdown: React.FC<GlobalHeaderRightProps> = () => {
  const history = useHistory();
  const { currentUser } = useSelector(({ initialState }: any) => initialState);

  const data = [{
    title: "个人设置",
    icon: <SetIcon />,
    onClick: () => {
      history.push("/workBench/systemSet/PersonalSet")
    }
  }, {
    title: "退出登录",
    icon: <OutLoginIcon />,
    onClick: () => loginOut({ history })
  }]


  return (
    <div className={styles.avatar_wapper}>
      <Avatar
        className={styles.avatar}
        src={defaultAvatar}
      />
      <span style={{ paddingLeft: "10px" }}>{currentUser?.account?.name || currentUser?.name}</span>
      <div className={styles.avatar_list}>
        {
          data.map((item) => (
            <div key={item.title} className={styles.avatar_item_list}>
              <div onClick={item.onClick}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AvatarDropdown;
