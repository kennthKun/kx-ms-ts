import { CloseOutlined } from '@ant-design/icons';
import { Fragment, ReactNode } from 'react';
import styles from '../index.module.less';

interface agreemet {
  title?: string;
  content?: ReactNode;
  setVisible: Function;
  visible: boolean;
}
const Agreement = ({ visible, title, content, setVisible }: agreemet) => {
  return (
    <Fragment>
      {visible && (
        <div className={styles.agreement_mat}>
          <div className={styles.agreement_mat_inner}>
            <div className={styles.title}>
              <span>{title}</span>
              <CloseOutlined onClick={() => setVisible(false)} />
            </div>
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Agreement;
