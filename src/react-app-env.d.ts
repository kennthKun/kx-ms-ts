/*
 * @Author: kennthKun c_kunx@163.com
 * @Date: 2022-11-01 11:42:04
 * @LastEditors: kennthKun c_kunx@163.com
 * @LastEditTime: 2022-11-03 14:47:36
 * @FilePath: /kx-ms-ts/src/react-app-env.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module '@'
declare module 'antd'
declare module 'lodash'
declare module 'react-redux'
declare module 'kx_component'
declare module '@ant-design/icons'
declare module 'styled-components'
declare module 'moment'
declare const systemName

// declare const API_ENV: 'test' | 'dev' | 'pre' | 'prod';
