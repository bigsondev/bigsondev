import React from 'react';
import styled from 'styled-components';

// type Justify =
//   | 'start'
//   | 'center'
//   | 'end'
//   | 'left'
//   | 'right'
//   | 'flex-start'
//   | 'space-between'
//   | 'space-around'
//   | 'flex-end';

// type Alignment = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

// export interface IBoxProps {
//   margin?: string;
//   m?: number;
//   mt?: number;
//   mr?: number;
//   mb?: number;
//   ml?: number;
//   padding?: string;
//   p?: number;
//   pt?: number;
//   pr?: number;
//   pb?: number;
//   pl?: number;
//   children?: ReactNode;
//   display?: 'block' | 'flex';
//   justify?: Justify;
//   align?: Alignment;
//   className?: string;
//   maxWidth?: number;
// }

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
  })
);

export const Box = ({ ...props }) => {
  return <BoxWrapper {...props} />;
};
