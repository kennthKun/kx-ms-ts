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
      $id: 12,
      valueType: "text",
      FormItemProps: {
        label: '文本',
        name: 'text',
        rules: [
          {
            pattern: /^\S.*\S$|(^\S{0,1}\S$)/,
            message: '前后不可输入空格',
          },
        ],
      },
    },
    {
      $id: 11,
      valueType: 'select',
      FormItemProps: {
        label: '下拉框',
        name: 11,
      },
      options: [],
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
    }
  ],
}