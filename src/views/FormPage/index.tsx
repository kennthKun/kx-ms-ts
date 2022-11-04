/*
 * @Author: kennthKun c_kunx@163.com
 * @Date: 2022-11-03 14:12:10
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-04 18:00:57
 * @FilePath: /kx-ms-ts/src/views/FormPage/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import pageProps from "./pageProps"
import { Form } from 'antd';
import { Component } from 'kx_component';
const { FormList, FormProps }: any = pageProps
const { FormBox } = Component
const FormWapper: React.FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields()
  }, [FormList])

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onValuesChange = (value: any) => {
    console.log(value);
  };

  return (
    <>
      <FormBox
        FormList={FormList}
        form={form}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        {...FormProps?.layout}
        style={{
          ...FormProps?.styles,
          width: FormProps?.styles?.width?.value + (FormProps?.styles?.width?.type === 1 ? 'px' : '%')
        }}
      />
    </>
  )
};

export default FormWapper;