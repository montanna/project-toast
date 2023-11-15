import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastStack } = React.useContext(ToastContext);
  
  return (
    <ol 
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastStack.map((item)=>(
      <li className={styles.toastWrapper} key={item.id}>
        <Toast variant={item.variant} id={item.id}>{item.message}</Toast>
      </li>))}
      
    </ol>
  );
}

export default ToastShelf;
