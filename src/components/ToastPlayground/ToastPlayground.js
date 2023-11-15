import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import {ToastContext} from '../ToastProvider';
import useEscapeKey  from '../hooks/use-escape-key.js';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]); 
const [message, setMessage] = React.useState(""); 
const {createToast, setToastStack} = React.useContext(ToastContext);

useEscapeKey(()=>{setToastStack([])});


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      
        <ToastShelf>
          
        </ToastShelf>
       
      <form className={styles.controlsWrapper} onSubmit={(event)=>{event.preventDefault(); createToast(variant, message); setVariant("notice"); setMessage("");}}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event)=>{setMessage(event.target.value)}}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map(
            (option, index)=>(
              <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`} key={index}
              >
            <label htmlFor={`variant-${option}`}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={(event)=>{setVariant(event.target.value)}}
              />
              {option}
            </label>
          </div>
            )
          )}
          
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
