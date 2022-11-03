import { API } from '@/const';
import request from '@/utils/request';

// 请求权限
export async function getResourceListApi() {
  return request(`${API.custom}/sysResource/getResourceList`, {
    method: 'get',
  });
}
