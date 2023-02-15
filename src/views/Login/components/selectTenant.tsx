import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import { useModel, history } from '@umijs/max';
import styles from '../index.module.less';
import { changePhoneType } from '@/utils';
import { setLocaleStorage } from '@/utils/cookie';
import { useDispatch } from "react-redux"
import { message } from 'kx_component';
import CreateCustom from './createCustom';

interface selectTenant {
  setType: Function;
  tenantList: any[];
  history: any;
  type: any
}
const SelectTenant = ({ type, setType, tenantList, history }: selectTenant) => {
  const { initialState } = useDispatch();
  const clickTenant = async (tenantId: string) => {
    await setLocaleStorage('TENANTID', tenantId);
    await initialState?.getAppFun?.()
    await initialState?.getRoleListFun?.();
    await initialState?.getResourceList?.();
    await initialState?.fetchUserInfo?.();
    initialState.updateState({
      TenantList: tenantList,
    })
    message.success('登录成功！');
    history.push(`/workBench/page`);
  };

  return (
    <div className={styles.selectTenant}>
      <span onClick={() => setType(1)} style={{ cursor: 'pointer' }}>
        <LeftOutlined style={{ marginRight: '5px' }} />
        返回
      </span>

      {type === 2 ?
        <>
          <div className={styles.tips}>你可进入以下企业</div>
          <div className={styles.tips_t}>
            <span>{changePhoneType(tenantList[0]?.account?.phone)}</span>
            你在以下企业或组织绑定了账号，你可进入以下任一企业或组织
          </div>
          <div style={{ height: '360px', overflow: 'auto' }}>
            {tenantList?.map((item: any) => {
              return (
                <div
                  key={item?.tenantId}
                  className={styles.tenant_list}
                  onClick={() => clickTenant(item?.tenantId)}
                >
                  <div className={styles.t_logo}>
                    {item?.icon ? (
                      <img className={styles.img_logo} src={item?.account?.avatar} />
                    ) : (
                      <div className={styles.text_logo}>{item?.name?.charAt(0)}</div>
                    )}
                  </div>
                  <div className={styles.name}>
                    <div className={styles.title}>{item?.name}</div>
                    <div>{item?.account?.name}</div>
                  </div>
                  <RightOutlined />
                </div>
              );
            })}
          </div>
        </> : <CreateCustom />
      }
    </div>
  );
};

export default SelectTenant;
