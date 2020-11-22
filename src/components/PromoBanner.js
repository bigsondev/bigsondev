import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';

const colorMapper = {
  normal: '#2f4586e8',
  promotion: '#F9B060',
};

const Holder = styled.div(({ color = 'normal' }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: colorMapper[color],
  padding: '5rem 1.5rem',
  position: 'relative',
}));

export const PromoBanner = ({ title, desc, content, color, ...props }) => (
  <Holder color={color} {...props}>
    {typeof title === 'string' ? (
      <Paragraph
        transform="uppercase"
        color="#FAFAFA"
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
      color="#FAFAFA"
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
