import { Fragment } from 'react';
import styles from '../index.module.less';
import { protocol } from './protocolText';

const Agreement = () => {
  return (
    <Fragment>
      <div className={styles.agreement_mat}>
        <div className={styles.agreement_mat_inner}>
          <div className={styles.title}>
            <span>{protocol.title}</span>
          </div>
          <div className={styles.content}>{protocol.content}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Agreement;
