import styles from './Sider.module.less';


const SiderCustom = () => {
  const TitleTwo = () => {
    return <div className={styles.title_2}>

      工作台
    </div>
  }

  return <div className={styles.sider}>
    <div className={styles.sider_out_wapper}>
      <div className={styles.sider_inener_wapper}>
        <div className={styles.title_1}>
          工作台
        </div>

        <TitleTwo />
      </div>
    </div>
  </div>
}

export default SiderCustom