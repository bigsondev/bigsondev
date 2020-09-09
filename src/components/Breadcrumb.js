import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Text } from '.';

const Wrapper = styled.div({
  paddingBottom: 16,
});

export const Breadcrumb = ({ title }) => (
  <Wrapper>
    <AntdBreadcrumb>
      <AntdBreadcrumb.Item>
        <Link to="/">
          <Text size="small">Dashboard</Text>
        </Link>
      </AntdBreadcrumb.Item>
      <AntdBreadcrumb.Item>
        <Text size="small">{title}</Text>
      </AntdBreadcrumb.Item>
    </AntdBreadcrumb>
  </Wrapper>
);
