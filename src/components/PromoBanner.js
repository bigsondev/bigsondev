import React from 'react';
import styled from 'styled-components';

import { Paragraph } from './Typography';

const Holder = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f4586e8',
  padding: '5rem 0 8rem',
});

export const PromoBanner = ({ title, desc, content }) => (
  <Holder>
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
