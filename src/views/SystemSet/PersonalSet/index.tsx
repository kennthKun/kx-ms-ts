import LeftAndRightLayout from "./LeftAndRightLayout"
import LeftContent from "./LeftContent"
import BaseContent from "./BaseContent"
import ShareContent from "./ShareContent"
import SafeContent from "./SafeContent"
import { useSelector } from "react-redux"
import styles from "./index.module.less"
const PersonalSet = () => {
  const { activityItem } = useSelector(({ personalStore }: any) => personalStore);

  const RightContent = () => ([
    <BaseContent />,
    <SafeContent />,
    <ShareContent />
  ][activityItem.index])

  return <>
    <LeftAndRightLayout
      LeftHeaderContent={<div>个人设置</div>}
      LeftContent={<LeftContent />}
      RightHeaderContent={activityItem.title}
      RightContent={<div className={styles.right_content}>
        <RightContent />
      </div>}
    />
  </>
}

export default PersonalSet