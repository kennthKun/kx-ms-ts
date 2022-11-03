import { API } from '@/const';
import request from '@/utils/request';

export async function getUserDeptTree() {
  return request(`${API.custom}/sysUserRelation/getUserDeptTree`, {
    method: 'get',
  });
}
