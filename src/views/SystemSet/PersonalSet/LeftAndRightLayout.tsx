import styels from "./LeftAndRightLayout.module.less"
const LeftAndRightLayout = ({ LeftHeaderContent, RightHeaderContent, LeftContent, RightContent }: any) => {
  return <div className={styels.LeftAndRightLayout}>
    <div className={styels.Left}>
      <div className={styels.header_title}>
        {LeftHeaderContent}
      </div>
      <div>
        {LeftContent}
      </div>
    </div>
    <div className={styels.Right}>
      <div className={styels.header_title}>
        {RightHeaderContent}
      </div>
      <div>
        {RightContent}
      </div>
    </div>
  </div>
}

export default LeftAndRightLayout