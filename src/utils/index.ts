import { getSessionStorage } from './cookie';
const API_ENV = process.env.API_ENV;
import { cloneDeep } from 'lodash';
import moment from 'moment';
import { DEFAULT_ID, SYSYTYPE } from '@/const';
import { getCookie, getLocaleStorage } from '@/utils/cookie';

export function getItemProps(schems: object, item: object) {
  const data = {};
  const itemKeys = Object.keys(item);
  const schemsKeys = Object.keys(schems);
  for (const s of schemsKeys) {
    if (item[s] === undefined) {
      data[s] = schems[s];
    }
  }
  for (const i of itemKeys) {
    if (schems[i] === undefined) {
      data[i] = item[i];
    }

    if (item[i] !== undefined && typeof item[i] !== 'object') {
      data[i] = item[i];
    }
    if (typeof schems[i] === 'object') {
      if (schems[i] instanceof Array) {
        data[i] = [...schems[i], ...item[i]];
      } else {
        data[i] = { ...schems[i], ...item[i] };
      }
    }
  }
  return data;
}

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
  if (window.location.hostname === 'localhost' || window.location.hostname === '192.168.3.87') {
    Domain = `${API_ENV}.ailieyun.com`;
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `${token}`,
    dept_id: JSON.parse(ROLE_DATA)?.deptId || '',
    role_id: JSON.parse(ROLE_DATA)?.roleId || '',
    app_id: getLocaleStorage('APPID') || DEFAULT_ID?.APPID,
    tenant_id: getLocaleStorage('TENANTID') || DEFAULT_ID?.TENANT_ID,
    Domain
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

// 深度处理 根据属性值递归删除对象
export const DeepKeySearchObjDel: any = (arr: any = [], children: any, key: any, value: any, keyArr: any = []) => {
  for (let i = 0; i < arr.length; i++) {
    // break：退出循环 continue：退出本次循环
    if (arr[i]?.[key] === value) {
      keyArr.push(arr[i])
      arr.splice(i, 1);
      i--
      continue
    }
    if (arr[i]?.[children]?.length) {
      DeepKeySearchObjDel(arr[i][children], children, key, value, keyArr)
    }
  }
  return {
    arr,
    keyArr
  }
}

// 根据属性值查询数组对象并删除
export const keySearchObjDel = (arr: any = [], key: any, value: any): any => {
  const arrNew = cloneDeep(arr);
  const keysValue = arr?.map((item: any) => {
    return item[key];
  });
  const keyIndex = keysValue?.indexOf(value);
  if (keyIndex >= 0) {
    arrNew.splice(keyIndex, 1);
  }
  return arrNew;
};

// 获取URL地址参数
export const getUrlParam = (paraName: string) => {
  let url = document.location.toString();
  let arrObj = url.split('?');
  if (arrObj.length > 1) {
    let arrPara = arrObj[1].split('&');
    let arr;
    for (let i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=');
      if (arr != null && arr[0] === paraName) {
        return arr[1];
      }
    }
    return '';
  }
  return '';
};

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
  const posNumber = pos.split('-').map(item => {
    return Number(item);
  });

  if (del) {
    posNumber.splice(0, 1);
  }
  let dataSource = data;
  let titleArr = [];
  for (const i of posNumber) {
    titleArr.push(dataSource[i]?.[title]);
    dataSource = dataSource[i]?.[children] || [];
  }
  return titleArr;
};

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
  let Groups = arr.map(item => {
    return item.group;
  });
  let values = arr.map(item => {
    return typeof item.dataIndex === 'string' ? item.dataIndex : item.dataIndex.join(',');
  });
  Groups = [...new Set(Groups)];
  let plainOptions = [];
  for (let i of Groups) {
    const item: any = {
      groupTitle: i,
      data: []
    };
    arr.forEach(j => {
      if (j.group === i) {
        item.data.push({
          label: j.title,
          value: typeof j.dataIndex === 'string' ? j.dataIndex : j.dataIndex.join(',')
        });
      }
    });
    plainOptions.push(item);
  }
  return {
    options: plainOptions,
    length: arr.length,
    values
  };
};

export const ExportkeyValue = (checkedList: any, columns: any) => {
  const data = {};
  for (const i of checkedList) {
    const item = keySearchObj(columns, 'dataIndex', i);
    data[i] = item.title;
  }
  return data;
};

// 每3位加,
function toThousands(num: string) {
  let result = '';
  let counter = 0;
  for (let i = num.length - 1; i >= 0; i -= 1) {
    counter += 1;
    result = num.charAt(i) + result;
    if (!(counter % 3) && i !== 0) {
      result = `,${result}`;
    }
  }
  return result;
}

// table 处理 金额
export const moneyHandle = (num: number | string, type?: string) => {
  let newNum = '';
  if (num || num === 0) {
    if (typeof num === 'string') {
      newNum = num;
    } else {
      newNum += num;
    }
  }

  if (newNum.indexOf('.') === -1) {
    newNum += '.00';
  }

  if (newNum.length - newNum.indexOf('.') === 2) {
    newNum += '0';
  }

  if (newNum.length - newNum.indexOf('.') > 3) {
    newNum = newNum.slice(0, newNum.indexOf('.') + 3);
  }

  const numFoot = newNum.split('.');
  const numHead = toThousands(numFoot[0]);
  return `${type || ''}${numHead}.${numFoot[1]}`;
};

// 清除无效数据传参
export function cleanObjectEmpty(object: any) {
  Object.entries(object).forEach(([k, v]: any) => {
    if (v && typeof v === 'object') {
      if (Object.prototype.toString.call(v) === '[object Array]') {
        if (!v.length) {
          delete object[k];
        }
      }
      if (Object.prototype.toString.call(v) === '[object Object]') {
        if (!Object.keys(v).length) {
          delete object[k];
        }
      }
      cleanObjectEmpty(v);
    }
    if (!v && v !== 0 && v !== false) {
      delete object[k];
    }
  });
  return object;
}

export const covertAddressArea = (code: string, city: any, province: string, township: any) => {
  const codeArr = [];
  if (code) {
    const proviceCode = `${code[0]}${code[1]}`;
    const cityCode = `${code[2]}${code[3]}`;
    codeArr.push(`${proviceCode}0000`);
    const distictCode = `${code[4]}${code[5]}`;
    if (cityCode !== '00') {
      if (city?.length) {
        codeArr.push(`${proviceCode}${cityCode}00`);
      } else {
        const arr = ['北京', '天津', '重庆', '上海'];
        arr.forEach((item: string) => {
          if (province.includes(item)) {
            codeArr.push(`${proviceCode}${cityCode}00`);
          }
        });
      }
    }
    if (distictCode !== '00') {
      codeArr.push(`${proviceCode}${cityCode}${distictCode}`);
      if (township?.length) {
        codeArr.push(township);
      }
    }
  }
  return codeArr;
};
export const formatDataHandle = (date: any) => {
  if (date) {
    let e: any = date.includes('年') ? date.replace('年', '-') : date;
    e = date.includes('月') ? e.replace('月', '-') : e;
    e = date.includes('日') ? e.replace('日', '-') : e;
    e = date.includes('长期') ? moment(new Date()).add(100, 'year').format('YYYY-MM-DD') : e;
    return moment(e).format('YYYY-MM-DD') !== 'Invalid date' ? moment(moment(e).format('YYYY-MM-DD'), 'YYYY-MM-DD') : undefined;
  } else {
    return undefined;
  }
};
export const coverTextArrHandle = (arr: any) => {
  return arr
    .filter((item: any) => item.value || item.value === 0)
    .map((item: any) => `${item.name} ${item.value} ${item.unit}`)
    .join('；');
};

export const getButtonRole = (auth: any) => {
  if (!auth || getLocaleStorage('SYSTYPE') === SYSYTYPE.CUSTOMER) {
    return true
  }
  let bool = false;
  const permission = JSON.parse(getSessionStorage('BUTTON_ROLE') || '[]');
  const keysValue = permission?.map((item: any) => {
    return item['code'];
  });
  if (keysValue.includes(auth)) {
    bool = true;
  }
  return bool;
}
