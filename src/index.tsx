/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:41:50
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-11-02 11:42:29
 * @FilePath: /ailieyun-ms/src/index.tsx
 */
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import init from './init';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let timer: any
window.addEventListener('scroll', function () {
  document.body.toggleAttribute('scroll', true)
  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    document.body.toggleAttribute('scroll')
  }, 500)
})



init(() => {
  root.render(
    <App />
  );
})

reportWebVitals();
