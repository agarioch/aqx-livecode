import clsx from 'clsx';

import styles from './StepNav.module.css';

function StepNav() {
  return (
    <ol className={styles.stepList}>
      <li className={clsx(styles.stepListItem, styles.active)}>
        <span className={styles.stepNum}>
          1
        </span>
        Info
      </li>
      <li className={styles.stepListItem}>
        <span className={styles.stepNum}>
          2
        </span>
        Role
      </li>
      <li className={styles.stepListItem}>
        <span className={styles.stepNum}>
          3
        </span>
        Summary
      </li>
    </ol>
  );
}

export default StepNav;