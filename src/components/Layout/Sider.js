/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 14:19:31
 * @FilePath: /ailieyun-ms/src/components/Layout/Sider.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Fragment } from 'react';
import styles from './Sider.module.less';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const SiderCustom = ({ collapsed }) => {
  const { ResourceList } = useSelector(({ initialState }) => initialState);

  const TitleTwo = ({ item }) => {
    return <>
      {
        item?.routes?.length ? <div className={styles.title_2_2}>
          {item.name}
          <div className={styles.title_2_wapper}>
            {
              item.routes.map((item2) => {
                return <Fragment key={item2.resourceId}>
                  <TitleTwo item={item2} />
                </Fragment>
              })
            }
          </div>

        </div> : <div className={styles.title_2}>
          <Link to={item.path || '/404'} className={styles.link}>
            <span className={styles.menu_item_icon}>
              <svg className="icon" aria-hidden="true">
                {item?.icon?.indexOf('kx-') >= 0 ? (
                  <use xlinkHref={`#${item.icon}`}></use>
                ) : (
                  <use xlinkHref={`#kx-caidanguanli`}></use>
                )}
              </svg>
            </span>
            {item.name}
          </Link>
        </div>
      }
    </>
  }

  return <div className={styles.sider} style={{ left: collapsed ? "0" : "-260px" }}>
    <div className={styles.sider_out_wapper}>
      <div className={styles.sider_inener_wapper}>
        {
          ResourceList.map((item, index) => {
            return <Fragment key={item.resourceId} >
              <div className={styles.title_1}>
                {item.name}
              </div>
              <div className={styles.title_2_wapper}>
                {
                  item.routes.map((item2) => {
                    return <Fragment key={item2.resourceId}>
                      <TitleTwo item={item2} />
                    </Fragment>
                  })
                }
              </div>
              {
                index % 2 === 1 ? <div className={styles.line}></div> : null
              }
            </Fragment>
          })
        }
      </div>
    </div>
  </div>
}

export default SiderCustom