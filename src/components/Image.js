import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { Text } from './Typography';

const Figure = styled.figure({
  margin: '2rem auto',
});

const FigureCaption = styled.figcaption({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '0.25rem',
});

const FluidImgHolder = styled(Img)({
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
});

const ImgHolder = styled.img({
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
});

export const Image = ({ fluid, src, alt, desc, ...restProps }) => (
  <Figure {...restProps}>
    {fluid ? (
      <FluidImgHolder fluid={fluid} alt={alt} />
    ) : (
      <ImgHolder src={src} alt={alt} />
    )}
    {desc && (
      <FigureCaption>
        <Text type="secondary" fontStyle="italic" size="small" align="center">
          {desc}
        </Text>
      </FigureCaption>
    )}
  </Figure>
);
