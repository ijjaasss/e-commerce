import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './Context/ContextProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    
    <ContextProvider>
    <App />
    
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </ContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

