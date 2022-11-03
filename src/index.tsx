/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:41:50
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 11:42:29
 * @FilePath: /ailieyun-ms/src/index.tsx
 */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
