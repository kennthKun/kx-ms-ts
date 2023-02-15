/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 12:09:40
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-01 17:05:00
 * @FilePath: /kx-ms-ts/src/views/Login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect } from 'react';
import { clearCookie, removeLocaleStorage } from '@/utils/cookie';
import PhoneLoginWapper from './components/PhoneLoginWapper';

import SelectTenant from './components/selectTenant';
import styles from './index.module.less';
import { useDispatch } from 'react-redux';
const Login = ({ history }: any) => {
  const { initialState }: any = useDispatch();
  const [Logo, setLogo] = useState('');
  const [type, setType] = useState(1);
  const [tenantList, setTenantList] = useState<any[]>([]);
  const seeAgreement = (url: string) => {
    window.open(`${window.origin}${url}`);
  };
  const GetAppFun = async () => {
    const res = await initialState.getAppFun();
    if (res) {
      setLogo(res?.data?.icon);
    }
  };
  useEffect(() => {
    clearCookie('AILIEYUN_ACCESS_TOKEN');
    removeLocaleStorage('ROLE_DATA');
    removeLocaleStorage('TENANTID');
    removeLocaleStorage('ROLE_DATA');
    GetAppFun();
  }, []);

  return (
    <>
      <div className={styles.LoginPage}>
        <img className={styles.logo} alt='logo' src={Logo} />
        <div className={styles.login_inner_wapper}>
          {type === 1 ? (
            <>
              <div className={styles.title_box}>登录</div>
              <div className={styles.login_form}>
                <div className={styles.header}>
                  <div className={`${styles.type_item} ${styles.type_item_activity}`}>手机登录</div>
                  {/* <div className={styles.type_item}>账号登录</div> */}
                </div>

                <div style={{ marginTop: '26px' }}>
                  <PhoneLoginWapper seeAgreement={seeAgreement} setType={setType} setTenantList={setTenantList} />
                </div>
                {/* 暂时隐藏
              <div className={styles.form_footer}>
              <div>1</div>
              <a>立即注册</a>
            </div> */}
              </div>
            </>
          ) : (
            <SelectTenant type={type} history={history} setType={setType} tenantList={tenantList} />
          )}
        </div>
        {/* <div className={styles.footer}>猎运智慧物流（天津）有限公司-销售部</div> */}
      </div>
    </>
  );
};

export default Login;
