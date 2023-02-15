import axios from 'axios';
import { message } from 'kx_component';
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
const loginPath = '/login';

axios.interceptors.request.use(
  (config: any) => {
    const headers = {
      ...getHeaders(),
      ...config.headers
    };
    config.headers = config.url.indexOf('restapi.amap.com') === -1 ? headers : {};
    if (config?.tenant_id) {
      config.headers.tenant_id = config.tenant_id;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  async (response: any) => {
    if (response?.status === HTTP_STATUS.AUTHENTICATE && location.pathname !== loginPath) {
      window.location.href = '/login';
      return;
    }

    if (response?.config?.url?.indexOf('auth/oauth') !== -1 || response?.config?.url?.indexOf('restapi.amap') !== -1 || response?.config?.url?.indexOf('custom/export') !== -1) {
      return response;
    }

    try {
      const res: any = response?.data;
      const { code, data, msg } = res;
      if ((code < -1 || data?.error === 'invalid_token') && location.pathname !== loginPath) {
        window.location.href = '/login';
        return;
      } else if (code === 0 && data !== false) {
        return response;
      } else {
        message.error(msg || '操作失败');
        return false;
      }
    } catch (error) { }

    return response;
  },
  err => {
    if (!err.response) {
      return;
    }
    const res = err.response;
    if (res?.status === HTTP_STATUS.AUTHENTICATE && location.pathname !== loginPath) {
      window.location.href = '/login';
      Promise.reject(err);
      return;
    }
    if (res?.status === HTTP_STATUS.AUTHENTICATE && location.pathname == loginPath) {
      return;
    }
    message.error(`${res?.data?.message || ''}`);
    return Promise.reject(err);
  }
);

const safeRequest = (url: string, options: any) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      ...options,
      url
    }).then(
      res => {
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      err => {
        logUtils.error(err);
        reject(err);
      }
    );
  });
};

export default safeRequest;
