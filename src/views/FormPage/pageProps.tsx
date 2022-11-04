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
      pType: "baseFormComponent",
      FormItemProps: {
        label: '底部提交',
        name: 0,
        rules: [],
        style: {
          margin: 0,
          padding: "10px"
        }
      },
      ControlProps: {
        prefix: "", // 带有前缀图标的 input
        suffix: "", // 带有后缀图标的 input
        disabled: false,
        maxLength: null,
        placeholder: "请输入",
        type: "input",
        allowClear: true,
        style: {}
      },
    }
  ],
}