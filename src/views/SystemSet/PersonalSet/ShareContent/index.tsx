import { Button } from "kx_component"
import { InputNumber } from "kx_component"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styles from "../index.module.less"
import copy from 'copy-to-clipboard';
import { message } from "kx_component"

const ShareContent = () => {

  const [hours, setHours] = useState(2)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(11)
  }, [])
  const getShareLink = async () => {
    if (!hours) {
      return message.error("请输入正确的过期时间");
    }

    const res = await dispatch.personalStore.getShareToken(hours)
    // http://localhost:8000?share=c2hhcmU6anRtNkhTZ3I5Z050VXhiM3p3SA==
    // http://localhost:8000?share=c2hhcmU6WEs0YllqSHp6dUVsSlVGc1NNZQ==
    // http://localhost:8000?share=c2hhcmU6NGhRSDBaYjlXTnJsTEZLTW5aZw==
    if (res.code === 0) {
      const link = `${window.location.origin}?share=${window.btoa(res.data)}`
      copy(link);
      message.success('分享链接已复制')
    }
  }

  return <div>
    <div className={styles.share_wapper}>
      <span>链接有效期:</span>
      <InputNumber onChange={setHours} value={hours} min={0} addonAfter="小时" style={{ width: "130px", margin: "0 10px" }} />
      <Button type="primary" onClick={getShareLink}>生成分享链接</Button>
    </div>
  </div>
}

export default ShareContent