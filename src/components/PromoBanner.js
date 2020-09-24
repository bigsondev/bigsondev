import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';

const colorMapper = {
  normal: '#2f4586e8',
  promotion: '#FFC069',
};

const Holder = styled.div(({ color = 'normal' }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: colorMapper[color],
  padding: '5rem 1.5rem',
}));

export const PromoBanner = ({ title, desc, content, color }) => (
  <Holder color={color}>
    {typeof title === 'string' ? (
      <Paragraph
        transform="uppercase"
        color="#FFF"
        size="preNormal"
        spacing={2}
        strong
      >
        {title}
      </Paragraph>
    ) : (
      title
    )}
    <Paragraph
      color="#FFF"
      fontWeight="400"
      marginBottom="2rem"
      align="center"
      size="h4"
    >
      {desc}
    </Paragraph>
    {content}
  </Holder>
);
