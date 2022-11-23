const API_ENV = process.env.API_ENV;
import { cloneDeep } from 'lodash';
/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-11-01 11:56:52
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 15:03:24
 * @FilePath: /kx-ms-ts/src/utils/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DEFAULT_ID } from '@/const';
import { getCookie, getLocaleStorage, getSessionStorage } from '@/utils/cookie';

// 手机号脱敏
export const changePhoneType = (value: string) => {
  if (value) {
    const tells = value;
    const tellPatern = /(\d{3})\d*(\d{4})/;
    const phone = tells.replace(tellPatern, '$1****$2');
    return phone;
  } else {
    return '';
  }
};

export function getHeaders() {
  const token = getCookie('AILIEYUN_ACCESS_TOKEN');
  const ROLE_DATA = getLocaleStorage('ROLE_DATA') || '{}';
  let Domain = window.location.hostname;
  if (window.location.hostname === 'localhost') {
    Domain = `${API_ENV}.ailieyun.com`;
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
    dept_id: JSON.parse(ROLE_DATA)?.deptId || '',
    role_id: JSON.parse(ROLE_DATA)?.roleId || '',
    app_id: getSessionStorage('APPID') || DEFAULT_ID?.APPID,
    tenant_id: getLocaleStorage('TENANTID') || DEFAULT_ID?.TENANT_ID,
    Domain,
  };
}

// 根据属性值查询数组对象
export const keySearchObj = (arr: Object[] = [], key: any, value: any): any => {
  const keysValue = arr?.map((item: any) => {
    return item[key];
  });
  const keyIndex = keysValue?.indexOf(value);
  return arr[keyIndex] || {};
};

// 根据属性值查询数组对象并删除
export const keySearchObjDel = (arr: any = [], key: any, value: any): any => {
  const arrNew = cloneDeep(arr)
  const keysValue = arr?.map((item: any) => {
    return item[key];
  });
  const keyIndex = keysValue?.indexOf(value);
  if (keyIndex >= 0) {
    arrNew.splice(keyIndex, 1)
  }
  return arrNew
};

// 获取URL地址参数
export const getUrlParam = (paraName: string) => {
  let url = document.location.toString()
  let arrObj = url.split('?')
  if (arrObj.length > 1) {
    let arrPara = arrObj[1].split('&')
    let arr
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')
      if (arr != null && arr[0] === paraName) {
        return arr[1]
      }
    }
    return ''
  }
  return ''
}

// 树对象平铺

export const TreeToArray = (tree: any, children: string, item?: string) => {
  const arr: any = [];
  const expanded = (datas: any) => {
    if (datas && datas.length > 0) {
      datas.forEach((e: any) => {
        item ? arr.push(e[item]) : arr.push(e);
        expanded(e[children]);
      });
    }
  };
  expanded(tree);
  return [...new Set(arr)];
};


// 树结构面包屑

export const TreeNav = (data: any[], pos: string, children: string, title: string, del?: boolean) => {
  const posNumber = pos.split('-').map((item) => {
    return Number(item)
  })

  if (del) {
    posNumber.splice(0, 1)
  }
  let dataSource = data
  let titleArr = []
  for (const i of posNumber) {
    titleArr.push(dataSource[i]?.[title])
    dataSource = dataSource[i]?.[children] || []
  }
  return titleArr
}

export const covertDateRange = (start: string, end: string) => {
  if (start && end) {
    return start?.split?.(' ')?.[0] + ' 至 ' + end?.split?.(' ')?.[0];
  }
  return '-';
};

// 判断数组对象有没有重复的属性
export const checkRepeat = (arr: Object[], key: any) => {
  const keys = arr.map((item: Object) => item[key]);
  const setKeys = new Set(keys); //去重复
  return setKeys.size < keys.length;
};

/**
 * 下载文件
 * @param {*} blob 文件blob对象
 * @param {*} fileName 保存的文件名
 * @param {*} type 文件类型，默认pdf
 */
export const downFile = (content: any, fileName: any, type: any = 'application/excel') => {
  // const buf = Buffer.from(content, 'binary')
  const blob = new Blob([content], { type });

  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(link.href);
  document.body.removeChild(link);
};


export const CustomColumnsData = (arr: any[]) => {
  let Groups = arr.map((item) => {
    return item.group
  })
  let values = arr.map((item) => {
    return item.dataIndex
  })
  Groups = [...new Set(Groups)]
  let plainOptions = []
  for (let i of Groups) {
    const item: any = {
      groupTitle: i,
      data: []
    }
    arr.forEach((j) => {
      if (j.group === i) {
        item.data.push({
          label: j.title,
          value: j.dataIndex,
        })
      }
    })
    plainOptions.push(item)
  }
  return {
    options: plainOptions,
    length: arr.length,
    values
  }
}

export const ExportkeyValue = (checkedList: any, columns: any) => {
  const data = {}
  for (const i of checkedList) {
    const item = keySearchObj(columns, 'dataIndex', i)
    data[i] = item.title
  }
  return data
}