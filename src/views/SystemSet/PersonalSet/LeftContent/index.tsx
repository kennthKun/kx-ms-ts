import styles from "../index.module.less"
import { useSelector, useDispatch } from "react-redux"

const LeftContent = () => {
  const dispatch = useDispatch()
  const { leftData, activityItem } = useSelector(({ personalStore }: any) => personalStore);

  const onChange = (item: { title: string; }) => {
    dispatch.personalStore.updateState({
      activityItem: item
    })
  }

  return <div>
    {
      leftData.map((item: { title: string }) => {
        return <div
          onClick={() => onChange(item)}
          key={item.title}
          className={`${styles.left_item} ${activityItem.title === item.title ? styles.activited : ""}`}
        >
          {item.title}
        </div>
      })
    }
  </div>
}

export default LeftContent