import { Fragment } from 'react';
import styles from '../index.module.less';
import { privacy } from './protocolText';

const Agreement = () => {
  return (
    <Fragment>
      <div className={styles.agreement_mat}>
        <div className={styles.agreement_mat_inner}>
          <div className={styles.title}>
            <span>{privacy.title}</span>
          </div>
          <div className={styles.content}>{privacy.content}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Agreement;
