import React from 'react';
import { Card as AntdCard } from 'antd';
import styled from 'styled-components';

import { Title, Box } from '..';

export const Holder = styled(AntdCard)({
  margin: '3rem 0',
  padding: '1rem',
  boxShadow: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
});

export const Card = ({ title, children }) => (
  <Holder>
    <Box mb={5}>
      <Title level={3} align="center">
        {title}
      </Title>
    </Box>
    {children}
  </Holder>
);
