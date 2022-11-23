import axios from 'axios';
import { message } from 'antd';
import { getHeaders } from '@/utils';
import { HTTP_STATUS } from '../consts/statusCode';
// import { CMS_BASEURL } from '../consts/env';
// import Cookie from './tools/cookie';
import logUtils from './tools/logUtils';

axios.defaults.withCredentials = false;
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// axios.defaults.baseURL = CMS_BASEURL;
// 中间件 拦截请求-
axios.interceptors.request.use(
  (config: any) => {

    const headers = {
      ...getHeaders(),
      ...config.headers,
    }
    config.headers = config.url.indexOf('restapi.amap.com') === -1 ? headers : {}
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      window.location.href = '/login';
      Promise.reject(err);
      return;
    }
    message.error(`${res.data.message}`);
    Promise.reject(err);
  },
);

const safeRequest = (url: string, options: any) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      ...options,
      url,
    }).then(
      (res) => {
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      (err) => {
        logUtils.error(err);
        reject(err);
      },
    );
  });
};

export default safeRequest;
