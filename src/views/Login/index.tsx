/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 12:09:40
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-01 15:26:22
 * @FilePath: /kx-ms-ts/src/views/Login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { ReactNode } from 'react';
import { useState,useEffect } from 'react';
import { clearCookie, removeLocaleStorage } from '@/utils/cookie';
import PhoneLoginWapper from './components/PhoneLoginWapper';
import Agreement from './components/agreement';
import SelectTenant from './components/selectTenant';
import styles from './index.module.less';

interface agreemet {
  title: string;
  content: ReactNode;
}

const Login = () => {

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(1);
  const [tenantList, setTenantList] = useState<any[]>([]);
  const [agreementContent, setAgreementContent] = useState<agreemet | null>();
  const seeAgreement = (data: any) => {
    setAgreementContent(data);
    setVisible(true);
  };

  useEffect(() => {
    console.log()
    clearCookie('AILIEYUN_ACCESS_TOKEN');
    removeLocaleStorage('ROLE_DATA');
  }, []);
  
  return <>
     <div className={styles.LoginPage}>
        <Agreement {...agreementContent} visible={visible} setVisible={setVisible} />
        <img
          className={styles.logo}
          alt="logo"
          src="http://ailieyun-file.oss-cn-beijing.aliyuncs.com/c534d314-f00c-4660-bc16-0025b406a42b.png"
        />

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
                  <PhoneLoginWapper
                    seeAgreement={seeAgreement}
                    setType={setType}
                    setTenantList={setTenantList}
                  />
                </div>
                {/* 暂时隐藏
              <div className={styles.form_footer}>
              <div>1</div>
              <a>立即注册</a>
            </div> */}
              </div>
            </>
          ) : (
            <SelectTenant setType={setType} tenantList={tenantList} />
          )}
        </div>
        {/* <div className={styles.footer}>猎运智慧物流（天津）有限公司-销售部</div> */}
      </div>
  </>
}

export default Login