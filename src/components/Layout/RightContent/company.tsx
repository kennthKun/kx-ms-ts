/*
 * @Author: kennthKun c_kunx@163.com
 * @Date: 2022-11-04 11:44:59
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 11:58:48
 * @FilePath: /kx-ms-ts/src/components/Layout/RightContent/company.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { keySearchObj } from '@/utils';
import { getLocaleStorage, removeLocaleStorage, setLocaleStorage } from '@/utils/cookie';
import { CheckOutlined } from '@ant-design/icons';
// import styles from './index.less';
import styles from './index.module.less';

const Company = ({ activited, initialState }: any) => {
  return (
    <div
      className={`${styles.company_wapper} ${initialState?.TenantList?.length > 1 ? styles.company_wapper_one : ''
        }`}
    >
      {keySearchObj(initialState?.TenantList, 'tenantId', getLocaleStorage('TENANTID'))?.name ? (
        <div>
          {`${keySearchObj(initialState?.TenantList, 'tenantId', getLocaleStorage('TENANTID'))?.name
            }${activited?.deptName ? '-' + activited?.deptName : ''}`}
        </div>
      ) : null}
      {initialState?.TenantList?.length > 1 ? (
        <div className={styles.company_awpper_box}>
          {initialState?.TenantList?.map((item: any) => {
            return (
              <div
                key={item.tenantId}
                className={styles.company_item}
                onClick={() => {
                  setLocaleStorage('TENANTID', item.tenantId);
                  removeLocaleStorage('ROLE_DATA');
                  window.location.href = '/';
                }}
              >
                <span className="iconfont kx-building-fill"></span>
                <span className={styles.name}>{item.name}</span>
                {getLocaleStorage('TENANTID') === item.tenantId ? (
                  <CheckOutlined className={styles.activity} />
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Company;
