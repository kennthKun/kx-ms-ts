import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { RightOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom';
import { getBreadcrumb, getIconMenu } from './getBreadcrumb';

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
      <>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#${getIconMenu(this.props.ResourceList)}`}></use>
        </svg>
        <RightOutlined style={{ fontSize: "10px", color: "#B6C2CD", margin: "0 5px" }} />
        <div>
          <Breadcrumb style={{ margin: '12px 0' }}>{this.Breadcrumbs()}</Breadcrumb>
        </div>
      </>
    );
  }
}
