import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import getBreadcrumb from './getBreadcrumb';

export default class BreadcrumbCustom extends Component {
  Breadcrumbs() {
    const b = getBreadcrumb()
    let v = b?.map((item) => {
      return (
        <Breadcrumb.Item key={item.path}>
          <Link to={item.path}>{item.name}</Link>
        </Breadcrumb.Item>
      );
    });
    return v;
  }

  render() {
    return (
      <div>
        <Breadcrumb style={{ margin: '12px 0' }}>{this.Breadcrumbs()}</Breadcrumb>
      </div>
    );
  }
}
