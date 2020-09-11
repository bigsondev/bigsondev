import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div({
  marginLeft: -12,
  paddingBottom: 16,
});

export const BackButton = ({ to }) => (
  <Wrapper>
    <Link to={to}>
      <Button type="link" icon={<ArrowLeftOutlined />}>
        Go Back
      </Button>
    </Link>
  </Wrapper>
);
