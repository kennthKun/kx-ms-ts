import { Tabs } from "kx_component"
import styles from '../index.module.less';

const CreateCustom = () => {
  return <>
    {/* <div className={styles.title_box}>登录</div> */}
    <div className={styles.login_form}>
      <div className={styles.header}>
        <div className={`${styles.type_item} ${styles.type_item_activity}`}>个人</div>
        <div className={styles.type_item}>企业</div>
      </div>
    </div>
  </>
}

export default CreateCustom