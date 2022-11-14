import { Component } from 'react';
import { ConfigProvider, message, Modal } from 'antd';
import zhCn from 'antd/es/locale/zh_CN';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import 'antd/dist/antd.less'
import './App.css';
import './kx.less'
import './tree.less'
import './table.less'
import "./iconfont.js"

message.config({
  prefixCls: `${systemName}-message`,
});

ConfigProvider.config({
  prefixCls: systemName,
  rootPrefixCls: systemName
})


class App extends Component {
  componentDidCatch() { }
  render() {
    return (
      <ConfigProvider locale={zhCn} prefixCls={systemName}>
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
