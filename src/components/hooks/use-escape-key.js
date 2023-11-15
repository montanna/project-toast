import React from 'react';
import { ToastContext } from '../ToastProvider';

function useEscapeKey() {
    const { setToastStack }  = React.useContext(ToastContext);
    React.useEffect(() => {
        const escapeToasts = function(event){
          if(event.key === "Escape"){
            console.log("it's funny it sounds just like the word escape")
            setToastStack([]);
          }
        };
        window.addEventListener("keydown", escapeToasts);
        return () => {
          window.removeEventListener("keydown", escapeToasts);
        }
      }, [setToastStack]);
}

export default useEscapeKey;