/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 17:13:18
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 10:14:07
 * @FilePath: /ailieyun-ms/src/views/WorkBench/index.tsx
 */
import React from 'react';
import styles from './index.module.less';
const Welcome: React.FC = () => {
  const role = localStorage.getItem(`TENANTID`);
  return (
    <>
      <div
        className={styles.content_Consignor}
        style={{
          backgroundImage: `url(${
            role !== '1001'
              ? 'http://ailieyun-file.oss-cn-beijing.aliyuncs.com/58746b74-23f1-4db7-9c4e-cf7862bb5913.png'
              : 'http://ailieyun-file.oss-cn-beijing.aliyuncs.com/b03c2088-6533-447f-9b44-4c7f304c6cdf.png'
          })`,
        }}
      >
        <div className={styles.footer_wapper}>
          <div className={styles.title}>猎运智慧{role !== '1001' ? '货主' : '运营'}端</div>
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
