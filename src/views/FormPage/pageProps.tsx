export default {
  "FormProps": {
    "fileName": "demo",
    "styles": {
      "paddingTop": 0,
      "paddingRight": 0,
      "paddingBottom": "60px",
      "paddingLeft": 0,
      "width": {
        "type": 2,
        "value": 100
      }
    },
    "layout": {
      "labelCol": {

      },
      "wrapperCol": {

      },
      "grid": 1
    }
  },
  "FormList": [
    {
      valueType: 'UploadImg',
      $id: 20,
      FormItemProps: {
        label: '图片上传',
        name: 20,
        required: false,
      },
    },
    {
      $id: 17,
      valueType: "IDCard",
      ocr: 'idCardLicenseV2',
      FormItemProps: {
        label: '身份证',
        name: [18, 19],
      },
    },
    {
      $id: 16,
      valueType: "DoubleUploadImg",
      FormItemProps: {
        label: '双图上传',
        name: [16, 17],
      },
    },
    {
      $id: 15,
      valueType: 'inputSearch',
      FormItemProps: {
        label: '搜索输入框',
        name: 15,
      },
    },
    {
      $id: 14,
      valueType: "mobile",
      FormItemProps: {
        label: '手机号',
        name: 14,
      },
    },
    {
      $id: 13,
      valueType: 'dateTimeRange',
      FormItemProps: {
        label: '日期时间区间',
        name: 13,
      },
    },
    {
      $id: 12,
      valueType: 'dateTime',
      FormItemProps: {
        label: '日期时间',
        name: 12,
      },
    },
    {
      $id: 11,
      valueType: 'dateRange',
      FormItemProps: {
        label: '日期区间',
        name: 11,
      },
    },
    {
      $id: 10,
      valueType: 'date',
      FormItemProps: {
        label: '日期',
        name: 10,
      }
    },
    {
      $id: 9,
      valueType: 'textarea',
      FormItemProps: {
        label: '文本域',
        name: 9,
      },
    },
    {
      $id: 8,
      valueType: 'money',
      FormItemProps: {
        label: '金额',
        name: 8,
      },
    },
    {
      $id: 7,
      valueType: 'digit',
      FormItemProps: {
        label: '数字输入框',
        name: 7,
      },
    },
    {
      $id: 6,
      valueType: 'password',
      FormItemProps: {
        label: '密码',
        name: 6,
      }
    },
    {
      $id: 5,
      valueType: 'switch',
      FormItemProps: {
        label: '开关',
        name: 5,
      }
    },
    {
      $id: 1,
      valueType: "radio",
      FormItemProps: {
        label: '单选框',
        name: 1,
      },
      ControlProps: {
        options: [
          { label: "选项一", value: "1" },
          { label: "选项二", value: "2" }
        ],
      },
    },
    {
      $id: 2,
      valueType: "text",
      FormItemProps: {
        label: '文本',
        name: '2',
      },
    },
    {
      $id: 3,
      valueType: 'select',
      FormItemProps: {
        label: '下拉框',
        name: 3,
      },
      options: [{
        label: "1",
        value: "22"
      }]
    },
    {
      $id: 4,
      valueType: 'select',
      FormItemProps: {
        label: '下拉框',
        name: 4,
      },
      ControlFieldNames: {
        valueName: "fieldTypeId",
        labelName: "typeDesc",
      },
      request: {
        url: "https://dev.ailieyun.com/api/custom/businessGoodsFieldType/list",
        type: "post",
        params: { data: {} },
        getData: ["data", "data"]
      },
    },
    {
      $id: 0,
      valueType: "BottomSubButton",
    }
  ],
}