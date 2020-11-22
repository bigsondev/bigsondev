import React from 'react';
import styled from 'styled-components';

import { Text } from './Typography';

const Figure = styled.figure({
  margin: '2rem auto',
});

const FigureCaption = styled.figcaption({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '0.25rem',
});

const Img = styled.img({
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
});

export const Image = ({ src, alt, desc }) => (
  <Figure>
    <Img src={src} alt={alt} />
    {desc && (
      <FigureCaption>
        <Text type="secondary" fontStyle="italic" size="small" align="center">
          {desc}
        </Text>
      </FigureCaption>
    )}
  </Figure>
);
