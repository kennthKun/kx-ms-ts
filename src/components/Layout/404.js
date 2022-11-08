/*
 * @Author: 常坤 c_kunx@163.com
 * @Date: 2022-10-30 19:14:23
 * @LastEditors: 常坤 c_kunx@163.com
 * @LastEditTime: 2022-10-31 19:38:03
 * @FilePath: /kx-ms/src/components/Layout/404.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Result, Button } from 'antd';

// 404页面
function NoMatch() {
  const history = useHistory();

  useEffect(() => {
    console.log(111)
  }, [])
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="对不起，你访问的页面不存在！"
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            回到首页
          </Button>
        }
      />
    </div>
  );
}

export default NoMatch;
