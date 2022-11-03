/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 14:19:31
 * @FilePath: /ailieyun-ms/src/components/Layout/Sider.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Fragment, useEffect } from 'react';
import styles from './Sider.module.less';
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const SiderCustom = ({collapsed}:any) => {
  const dispatch:any = useDispatch();
  const { ResourceList }:any = useSelector(({ initStore }:any) => initStore);

  const getResourceList = async () => {
    const res = await dispatch.initStore?.getResourceList?.();
    dispatch.initStore.updateState({
      ResourceList: res
    })
  }


  useEffect(() => {
    getResourceList()
  }, [])

  const TitleTwo = ({item}:any) => {
    return <div className={styles.title_2}>
      <Link to={item.path || '/404'} className={styles.link}>
        <span className={styles.menu_item_icon}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#${item.icon}`}></use>
          </svg>
        </span>
        {item.name}
      </Link>
    </div>
  }

  return <div className={styles.sider} style={{left : collapsed ? "0":"-260px"}}>
    <div className={styles.sider_out_wapper}>
      <div className={styles.sider_inener_wapper}>
        {
          ResourceList.map((item:any,index:number) => {
            return <Fragment key={item.resourceId} >
              <div className={styles.title_1}>
                {item.name}
              </div>
              <div className={styles.title_2_wapper}>
                {
                  item.routes.map((item2:any)=>{
                    return <Fragment key={item2.resourceId}>
                      <TitleTwo item={item2} />
                    </Fragment>
                  })
                }
              </div>
              {
                index % 2 === 1 ? <div className={styles.line}></div>:null
              }
            </Fragment>
          })
        }
      </div>
    </div>
  </div>
}

export default SiderCustom