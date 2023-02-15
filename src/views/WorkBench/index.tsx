import React from 'react';
import { SYSYTYPE } from "@/const"
import { getLocaleStorage } from "@/utils/cookie"
import styles from './index.module.less';
const Welcome: React.FC = () => {
  const role = localStorage.getItem(`TENANTID`);
  return (
    <>
      <div
        className={styles.content_Consignor}
        style={{
          backgroundImage: `url(${getLocaleStorage('SYSTYPE') === SYSYTYPE.CUSTOMER
            ? 'http://lieyuntong-file.oss-cn-beijing.aliyuncs.com/1f72afcd-83e6-41a9-8d9d-f29e18f3a89f.png' : 'http://lieyuntong-file.oss-cn-beijing.aliyuncs.com/cc1eac78-8321-4ad5-b4ca-7c6f5e4fba14.png'
            })`,
        }}
      >
        <div className={styles.footer_wapper}>
          <div className={styles.title}>猎运智慧{getLocaleStorage('SYSTYPE') === SYSYTYPE.CUSTOMER ? '货主' : '运营'}端</div>
          <div className={styles.titleSub}>
            <span>当前版本：</span>
            <span className={styles.titleSubVersion}>V1.0.0</span>
            {/* <span className={styles.titleSubFill}>使用手册</span> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
