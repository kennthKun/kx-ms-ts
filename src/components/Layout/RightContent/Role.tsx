import { CheckOutlined } from '@ant-design/icons';
// import styles from './index.less';
import styles from './index.module.less';

const bgCloor = (type: string) => {
  switch (type) {
    case '超级管理员':
      return {
        color: 'rgb(236,168,87)',
        background: 'rgba(236,168,87,0.2)',
      };
    case '管理员':
      return {
        color: '#386CF6',
        background: 'rgba(56, 108, 246,0.2)',
      };
    case '部门管理员':
      return {
        color: '#386CF6',
        background: 'rgba(56, 108, 246,0.2)',
      };
    case null:
      return {
        color: '#959FA9',
        background: 'rgba(149, 159, 169,0.2)',
      };
    default:
      return {
        color: '#6CCD7E',
        background: 'rgba(108, 205, 126,0.2)',
      };
  }
};

const Role = ({ activited, onChangeRole, list }: any) => {
  return (
    <>
      {list?.length ? (
        <>
          <div className={styles.role_wapper}>
            <div
              className={`${styles.role_now_wapper} ${list.length > 1 ? styles.role_now_wapper_one : ''
                }`}
            >
              <span
                className={styles.role_self}
                title={activited?.roleName}
                style={{
                  color: bgCloor(activited?.roleName).color,
                  background: bgCloor(activited?.roleName).background,
                }}
              >
                {activited?.roleName || '暂无角色'}
              </span>
            </div>
            {list.length > 1 ? (
              <div className={styles.role_list}>
                {list?.map((item: any) => {
                  return (
                    <div
                      key={item.entityId}
                      className={styles.list_item}
                      onClick={() => onChangeRole(item)}
                    >
                      <div className={styles.list_item_inner}>
                        <div
                          className={styles.role_self_wapper}
                          style={{
                            color: bgCloor(item?.roleName).color,
                          }}
                        >
                          <span
                            className={styles.role_self}
                            style={{
                              color: bgCloor(item?.roleName).color,
                              background: bgCloor(item?.roleName).background,
                            }}
                            title={item?.roleName || '暂无角色'}
                          >
                            {item.roleName || '暂无角色'}
                          </span>
                          {activited?.entityId === item?.entityId ? (
                            <CheckOutlined className={styles.activity} />
                          ) : null}
                        </div>
                        <span className={styles.department} title={item.deptName}>
                          {item.deptName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Role;
