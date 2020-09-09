import React from 'react';
import { Divider } from 'antd';

import { Title, Paragraph } from '.';

export const QuickSummary = ({ desc }) => (
  <>
    <Title level={4}>Quick Summary</Title>
    <Paragraph fontStyle="italic" type="secondary">
      {desc}
    </Paragraph>
    <Divider />
  </>
);
