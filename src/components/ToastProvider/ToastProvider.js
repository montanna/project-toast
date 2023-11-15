import React from 'react';
export const ToastContext = React.createContext();


function ToastProvider({children}) {
  const [toastStack, setToastStack] = React.useState([
    {
      id: crypto.randomUUID(),
      variant: 'error', 
      message:'Help! Someone is eating my toast!'
    }, 
    {
      id: crypto.randomUUID(),
      variant: 'success', 
      message:'Hello world!'
    }
  ]);
  const createToast = function(variant, message){
    setToastStack([...toastStack, {variant: variant, message: message, id:crypto.randomUUID()}]);
   }

   const dismissToast = function(id){
    const arr = toastStack.filter(item => item.id !== id);
    setToastStack(arr);
   }


  return (
  <ToastContext.Provider value={{toastStack, setToastStack, createToast, dismissToast}}>
    {children}
  </ToastContext.Provider>);
}

export default ToastProvider;
