import React from 'react';
import { Divider } from 'antd';

import { Title, Paragraph, Box } from '.';

export const QuickSummary = ({ desc }) => (
  <>
    <Box mb={6}>
      <Title level={4}>Quick Summary</Title>
      <Paragraph fontStyle="italic" type="secondary">
        {desc}
      </Paragraph>
      <Divider />
    </Box>
  </>
);
