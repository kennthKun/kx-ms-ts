import { Component } from 'react';
import { ConfigProvider, message } from 'kx_component';
import 'moment/locale/zh-cn';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import 'kx_component/dist/kx_component.min.css'
import './App.less';
import './kx.less'
import './tree.less'
import './table.less'
import './modal_Form.less'
import "./iconfont.js"
import zh_CN from 'kx_component/src/lib/locale/zh_CN'


message.config({
  prefixCls: `${systemName}-message`,
});

ConfigProvider.config({
  prefixCls: systemName,
  rootPrefixCls: systemName,
})

class App extends Component {
  componentDidCatch() { }
  render() {
    return (
      <ConfigProvider locale={zh_CN} prefixCls={systemName}>
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
