import React from 'react';
import { ToastContext } from '../ToastProvider';

function useEscapeKey(callback) {
    React.useEffect(() => {
        const escapeToasts = function(event){
          if(event.key === "Escape"){
            callback(event);
          }
        };
        window.addEventListener("keydown", escapeToasts);
        return () => {
          window.removeEventListener("keydown", escapeToasts);
        }
      }, [callback]);
}

export default useEscapeKey;