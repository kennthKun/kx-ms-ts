const API_ENV = process.env.API_ENV;
export const API = {
  auth: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/auth`,
  custom: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/custom`,
  track: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/track`,
  wallet: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/wallet`,
  business: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/business`,
  basis: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/basis`,
  upms: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/upms`,
  analysis: `https://${API_ENV}.${API_ENV === 'lyt' ? 'lieyuntong.cn' : 'ailieyun.com'}/api/analysis`
};

export const RESOURCETYPE = {
  group: 0,
  menu: 1,
  tab: 2,
  button: 3
};

export const DEFAULT_ID = {
  APPID: '1001',
  TENANT_ID: '1001'
};

export const EXPEROENCEPAGETYPE = {
  ADD: 'add',
  EDIT: 'edit',
  CHANGE: 'change'
};

export const EXPEROENCETYPE = {
  PERSONAL: '2',
  ENTERPRISE: '1'
};

export const TAXESTYPE = {
  ADD: 1,
  REDUCE: 2
};

export const SERVICEFEETYPE = {
  PROPORTION: 1,
  FIXEDVALUE: 2
};

// Request header content
export const CONTENT_TYPE = {
  URLENCODED: 'application/x-www-form-urlencoded',
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data'
};

export const UNIT_TYPE = {
  TAXPAYER: '1',
  SMALL_SCALE: '2',
  2: '小规模',
  1: '一般纳税人'
};
export const VEHICLE_FIELDS = [
  {
    label: '车牌颜色',
    value: 'LICENSE_PLATE_COLOR',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:LICENSE_PLATE_COLOR",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:LICENSE_PLATE_COLOR:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:LICENSE_PLATE_COLOR:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:LICENSE_PLATE_COLOR:ADD"
  },
  {
    label: '品牌管理',
    filedLabel: '品牌名称',
    value: 'BRAND_MANAGEMENT',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT:ADD",
    addSubdataRole: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT:ADDSUBDATA",
    editSubRole: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT:EDITSUB",
    deleteSubRole: "VEHICLEMANAGMENT:VEHICLEFIELD:BRAND_MANAGEMENT:DELETESUB"
  },
  {
    label: '车辆类型',
    filedLabel: '车辆类型',
    value: 'TYPE_MANAGEMENT',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:TYPE_MANAGEMENT",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:TYPE_MANAGEMENT:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:TYPE_MANAGEMENT:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:TYPE_MANAGEMENT:ADD"
  },
  {
    label: '能源类型',
    value: 'ENERGY_TYPES',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:ENERGY_TYPES",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:ENERGY_TYPES:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:ENERGY_TYPES:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:ENERGY_TYPES:ADD"
  },
  {
    label: '车辆产权',
    value: 'PROPERTY_RIGHTS',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:PROPERTY_RIGHTS",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:PROPERTY_RIGHTS:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:PROPERTY_RIGHTS:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:PROPERTY_RIGHTS:ADD"
  },
  {
    label: '车辆底盘',
    value: 'VEHICLE_CHASSIS',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:VEHICLE_CHASSIS",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:VEHICLE_CHASSIS:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:VEHICLE_CHASSIS:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:VEHICLE_CHASSIS:ADD"
  },
  {
    label: '排放标准',
    value: 'EMISSION_STANDARDS',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:EMISSION_STANDARDS",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:EMISSION_STANDARDS:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:EMISSION_STANDARDS:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:EMISSION_STANDARDS:ADD"
  },
  {
    label: '车辆状态',
    value: 'STATE_OF_THE_VEHICLE',
    role: "VEHICLEMANAGMENT:VEHICLEFIELD:STATE_OF_THE_VEHICLE",
    editRole: "VEHICLEMANAGMENT:VEHICLEFIELD:STATE_OF_THE_VEHICLE:EDIT",
    deleteRole: "VEHICLEMANAGMENT:VEHICLEFIELD:STATE_OF_THE_VEHICLE:DELETE",
    addRole: "VEHICLEMANAGMENT:VEHICLEFIELD:STATE_OF_THE_VEHICLE:ADD"
  }
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
  '56': '基诺族'
};

export const SYSYTYPE = {
  PLATFORM: '1', //平台
  CUSTOMER: '2' //客户
};

export const WAYBILL_LIST_TAB = [
  {
    label: '全部',
    value: ''
  },
  {
    label: '待审核',
    value: '1'
  },
  {
    label: '待派单',
    value: '2'
  },
  {
    label: '待接单',
    value: '3'
  },
  {
    label: '待出发',
    value: '4'
  },
  {
    label: '配送中',
    value: '5'
  },
  //   {
  //     label: '已到达',
  //     value: '6'
  //   },
  //   {
  //     label: '已签收',
  //     value: '7'
  //   },
  {
    label: '已付款',
    value: '8'
  },
  {
    label: '作废单',
    value: '0'
  },
  {
    label: '驳回',
    value: '9',
    hide: true
  }
  //   {
  //     label: '异常单',
  //     value: '10',
  //   },
];
export const WAYBILL_WEIGHT_TYPE = [
  {
    label: '无',
    value: 0
  },
  {
    label: '实际装货吨位',
    value: 1
  },
  {
    label: '实际卸货吨位',
    value: 2
  },
  {
    label: '两者（装货和卸货）最小',
    value: 3
  },
  {
    label: '两者（装货和卸货）最大',
    value: 4
  }
];
export const USER_STATUS = {
  0: '未实名用户',
  1: '未人脸用户',
  2: 'V1认证用户',
  3: 'V2认证用户'
};
export const DEMAND_MODEL = [
  {
    label: '不限',
    value: '不限'
  },
  {
    label: '货车',
    value: '货车',
    children: [
      {
        label: '平板',
        value: '平板'
      },
      {
        label: '高低板',
        value: '高低板'
      },
      {
        label: '高栏',
        value: '高栏'
      },
      {
        label: '厢式',
        value: '厢式'
      },
      {
        label: '冷藏',
        value: '冷藏'
      },
      {
        label: '集装箱',
        value: '集装箱'
      },
      {
        label: '保湿车',
        value: '保湿车'
      },
      {
        label: '棉被车',
        value: '棉被车'
      },
      {
        label: '爬梯车',
        value: '爬梯车'
      },
      {
        label: '飞翼',
        value: '飞翼'
      }
    ]
  },
  {
    label: '面包车',
    value: '面包车',
    children: [
      {
        label: '依维柯',
        value: '依维柯'
      },
      {
        label: '微型面包',
        value: '微型面包'
      }
    ]
  },
  {
    label: '特种车',
    value: '特种车',
    children: [
      {
        label: '自卸车',
        value: '自卸车'
      },
      {
        label: '大件牵引',
        value: '大件牵引'
      },
      {
        label: '搅拌车',
        value: '搅拌车'
      },
      {
        label: '粉粒物料',
        value: '粉粒物料'
      },
      {
        label: '干混砂浆',
        value: '干混砂浆'
      },
      {
        label: '背罐车',
        value: '背罐车'
      }
    ]
  }
];
