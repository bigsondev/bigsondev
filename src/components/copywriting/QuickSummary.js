import React from 'react';

import { Title, Paragraph } from '..';

export const QuickSummary = ({ desc }) => (
  <>
    <Title level={4}>DESCRIPTION</Title>
    <Paragraph type="secondary" size="preNormal" marginBottom="0">
      {desc}
    </Paragraph>
  </>
);
