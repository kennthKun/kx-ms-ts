/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:55:07
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 14:06:05
 * @FilePath: /ailieyun-ms/src/components/Layout/Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRef, useEffect, useState } from 'react';
import { Layout } from 'kx_component';
import styles from './Header.module.less';
import GlobalHeaderRight from "./RightContent"
import { useDispatch, useSelector } from "react-redux"
import SiderCustom from './Sider.js';
import BreadcrumbCustom from "./Breadcrumb"

const { Header } = Layout;
const HeaderCustom = () => {

  const cRef = useRef();
  const { initialState } = useDispatch();
  const { ResourceList } = useSelector(({ initialState }) => initialState);
  const [collapsed, setcollapsed] = useState(false)
  const toggle = (e) => {
    if (!cRef.current) {
      return;
    }
    if (!cRef.current?.contains(e.target) && cRef.current !== e.target) {
      initialState.updateState({ collapsed: false })
      setcollapsed(false)
      return;
    }
    setcollapsed(!collapsed)
  };

  useEffect(() => {
    window.addEventListener('click', toggle);
    return () => {
      window.removeEventListener('click', toggle);
    };
  }, []);

  return (
    <>
      <SiderCustom collapsed={collapsed} />
      <div className={styles.header_mat}></div>
      <Header className={styles.header} style={{ position: 'fixed', zIndex: 999, width: '100%', minWidth: "950px" }}>
        <div className={styles.header_left}>
          {ResourceList?.length > 0 ? <span className={styles.menu_item_icon}>
            <svg className="icon" aria-hidden="true" ref={cRef} onClick={(e) => {
              e.stopPropagation()
              toggle(e)
            }}>
              <use xlinkHref={`#kx-tubiaozhizuomoban`}></use>
            </svg>
          </span> : null}
          <div className={styles.breadcrumb_wapper}>
            <span className={styles.breadcrumb_icon}>
              <BreadcrumbCustom ResourceList={ResourceList} />
            </span>
          </div>
        </div>
        <GlobalHeaderRight />
      </Header>
    </>
  );
}


export default HeaderCustom