import request from '@/utils/request';
import { API } from '@/const';
// 自定义列查询
export async function basisColumnGetOne(data: any) {
  return request(`${API.custom}/basisColumn/getOne`, {
    method: `post`,
    data: {
      data,
    },
  });
}

// 自定义列查询
export async function basisColumnSave(data: any) {
  return request(`${API.custom}/basisColumn/save`, {
    method: `post`,
    data: {
      data,
    },
  });
}

export async function basisTysjUserGetOne(params: any) {
  return request(`${API.custom}/basisTysjUser/getOne`, {
    method: `post`,
    data: {
      data: { ...params },
    },
  });
}

export async function getDepartTree() {
  const ROLE_DATA = localStorage.getItem(`ROLE_DATA`) || `{}`;
  return request(`${API.custom}/sysDept/getTree`, {
    method: `post`,
    data: {
      data: { deptId: JSON.parse(ROLE_DATA)?.deptId },
    },
  });
}

export async function sysAccountList() {
  return request(`${API.custom}/sysUserRelation/getUserList`, {
    method: `get`,
  });
}

// 批量查询
export async function sysUserGetByIds(params: any) {
  return request(`${API.custom}/sysUser/getByIds`, {
    method: `post`,
    ...params,
  });
}

export async function getList({ pid }: any) {
  return request(`${API.custom}/customType/getTree`, {
    method: `post`,
    data: {
      data: {
        pid,
      },
    },
  });
}

// 查询账户信息sysAccount --------
export async function sysAccountGetByIds(contactIds: any) {
  return request(`${API.custom}/sysAccount/getByIds`, {
    method: `post`,
    data: contactIds,
  });
}

export async function sysAccountSave(data: any) {
  return request(`${API.custom}/sysAccount/saveAccount`, {
    method: `post`,
    data: {
      ...data,
    },
  });
}

export async function sysAccountDeleteById(accountId: any) {
  return request(`${API.custom}/sysAccount/deleteById/${accountId}`, {
    method: `delete`,
  });
}

// customAccount-----
export async function customAccountGetAccountList(customId: any) {
  return request(`${API.custom}/customAccount/getAccountList?customId=${customId}`, {
    method: `get`,
  });
}

export async function customAccountSaveAccount(data: any, param: any) {
  return request(`${API.custom}/customAccount/saveAccount`, {
    method: `post`,
    data: {
      data,
      param,
    },
  });
}

export async function customAccountDeleteAccount(customId: any, accountId: any) {
  return request(
    `${API.custom}/customAccount/deleteAccount?customId=${customId}&accountId=${accountId}`,
    {
      method: `delete`,
    },
  );
}

export async function getApp() {
  return request(`${API.auth}/sysTenant/getTenant`, {
    method: `get`,
  });
}

export async function basisColumnExport(data: any) {
  return request(`${API.custom}/custom/export`, {
    method: `post`,
    data,
    responseType: `blob`,
  });
}
// 获取车辆字段字典
export const postVehicleDictDictionaryList = async (data: any) =>
  request(`${API.custom}/basisDict/getList`, {
    method: 'post',
    data,
  });

/** 建站获取列表接口 */
export async function getDataList({ url, reqType, query, headers }: any) {
  return request(url, {
    method: reqType,
    data: {
      ...query,
    },
    headers,
  });
}

/** 建站获取列表接口 */
export async function getSchemaDataList({ url, type, parameter, headers }: any) {
  return request(url, {
    method: type,
    data: {
      ...parameter,
    },
    headers,
  });
}

// 根据id查询费率
export async function getRateById(id: string | number) {
  return request(`${API.custom}/businessRate/getById/${id}`, {
    method: 'get',
  });
}
// 获取车辆品牌字段列表
export const postVehicleBrandInfoList = async (data: any) =>
  request(`${API.custom}/basisVehicleBrand/list`, {
    method: 'post',
    data: { data: {} },
  });

export const shareToken = async (key: string) => {
  return request(`${API.auth}/oauth/share/login?token=${key}`, {
    method: 'get',
  })

}