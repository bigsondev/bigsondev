import React from 'react';
import styled from 'styled-components';

const SPACING_SCALE = 8;

const BoxWrapper = styled.div(
  ({
    display = 'block',
    justify = 'start',
    align = 'flex-start',
    direction = 'row',
    m,
    margin,
    padding,
    mt,
    mr,
    mb,
    ml,
    p,
    pt,
    pr,
    pb,
    pl,
    maxWidth,
    width,
    background,
    borderRadius,
  }) => ({
    display,
    justifyContent: justify,
    alignItems: align,
    flexDirection: direction,
    margin: (margin && margin) || (m && m * SPACING_SCALE),
    marginTop: mt && mt * SPACING_SCALE,
    marginRight: mr && mr * SPACING_SCALE,
    marginBottom: mb && mb * SPACING_SCALE,
    marginLeft: ml && ml * SPACING_SCALE,
    padding: (padding && padding) || (p && p * SPACING_SCALE),
    paddingTop: pt && pt * SPACING_SCALE,
    paddingRight: pr && pr * SPACING_SCALE,
    paddingBottom: pb && pb * SPACING_SCALE,
    paddingLeft: pl && pl * SPACING_SCALE,
    maxWidth,
    width,
    background,
    borderRadius,
  })
);

export const Box = ({ ...props }) => {
  return <BoxWrapper {...props} />;
};
