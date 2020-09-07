import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div({
  paddingBottom: 16,
});

export const Breadcrumb = ({ title }) => (
  <Wrapper>
    <AntdBreadcrumb>
      <AntdBreadcrumb.Item>
        <Link to="/">Dashboard</Link>
      </AntdBreadcrumb.Item>
      <AntdBreadcrumb.Item>{title}</AntdBreadcrumb.Item>
    </AntdBreadcrumb>
  </Wrapper>
);
