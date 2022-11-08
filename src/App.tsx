import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import zhCn from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import './App.css';
import './page_department.less'
import './kx.less'
import "./iconfont.js"
class App extends Component {
  componentDidCatch() { }

  componentDidMount(): void {
    console.log(window.location)
  }
  render() {
    return (
      <ConfigProvider locale={zhCn} >
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}
export default App;
