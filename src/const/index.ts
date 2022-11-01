const API_ENV = process.env.API_ENV;
export const API = {
  auth: `https://${API_ENV}.ailieyun.com/api/auth`,
  custom: `https://${API_ENV}.ailieyun.com/api/custom`,
  track: `https://${API_ENV}.ailieyun.com/api/track`,
};

export const RESOURCETYPE = {
  group: 0,
  menu: 1,
  tab: 2,
  button: 3,
};

export const DEFAULT_ID = {
  APPID: '1001',
  TENANT_ID: '1001',
};

export const EXPEROENCEPAGETYPE = {
  ADD: 'add',
  EDIT: 'edit',
  CHANGE: 'change',
};

export const EXPEROENCETYPE = {
  PERSONAL: '2',
  ENTERPRISE: '1',
};

export const TAXESTYPE = {
  ADD: 1,
  REDUCE: 2,
};

export const SERVICEFEETYPE = {
  PROPORTION: 1,
  FIXEDVALUE: 2,
};

// Request header content
export const CONTENT_TYPE = {
  URLENCODED: 'application/x-www-form-urlencoded',
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
};

export const UNIT_TYPE = {
  TAXPAYER: '1',
  SMALL_SCALE: '2',
  2: '小规模',
  1: '一般纳税人',
};
export const VEHICLE_FIELDS = [
  {
    label: '车牌颜色',
    value: 'LICENSE_PLATE_COLOR',
  },
  {
    label: '品牌管理',
    filedLabel: '品牌名称',
    value: 'BRAND_MANAGEMENT',
  },
  {
    label: '类型管理',
    filedLabel: '车辆类型',
    value: 'TYPE_MANAGEMENT',
  },
  {
    label: '能源类型',
    value: 'ENERGY_TYPES',
  },
  {
    label: '车辆产权',
    value: 'PROPERTY_RIGHTS',
  },
  {
    label: '车辆底盘',
    value: 'VEHICLE_CHASSIS',
  },
  {
    label: '排放标准',
    value: 'EMISSION_STANDARDS',
  },
  {
    label: '车辆状态',
    value: 'STATE_OF_THE_VEHICLE',
  },
];
export const NATIONAL = {
  '01': '汉族',
  '02': '蒙古族',
  '03': '回族',
  '04': '藏族',
  '05': '维吾尔族',
  '06': '苗族',
  '07': '彝族',
  '08': '壮族',
  '09': '布依族',
  '10': '朝鲜族',
  '11': '满族',
  '12': '侗族',
  '13': '瑶族',
  '14': '白族',
  '15': '土家族',
  '16': '哈尼族',
  '17': '哈萨克族',
  '18': '傣族',
  '19': '黎族',
  '20': '僳僳族',
  '21': '佤族',
  '22': '畲族',
  '23': '高山族',
  '24': '拉祜族',
  '25': '水族',
  '26': '东乡族',
  '27': '纳西族',
  '28': '景颇族',
  '29': '柯尔克孜族',
  '30': '土族',
  '31': '达斡尔族',
  '32': '仫佬族',
  '33': '羌族',
  '34': '布朗族',
  '35': '撒拉族',
  '36': '毛难族',
  '37': '仡佬族',
  '38': '锡伯族',
  '39': '阿昌族',
  '40': '普米族',
  '41': '塔吉克族',
  '42': '怒族',
  '43': '乌孜别克族',
  '44': '俄罗斯族',
  '45': '鄂温克族',
  '46': '崩龙族',
  '47': '保安族',
  '48': '裕固族',
  '49': '京族',
  '50': '塔塔尔族',
  '51': '独龙族',
  '52': '鄂伦春族',
  '53': '赫哲族',
  '54': '门巴族',
  '55': '珞巴族',
  '56': '基诺族',
};
