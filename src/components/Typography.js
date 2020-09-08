import { Typography } from 'antd';
import styled from 'styled-components';

export const Text = styled(Typography.Text)(
  ({
    align = 'left',
    fontWeight,
    gutterBottom = false,
    display = 'inline',
  }) => ({
    textAlign: align,
    display,
    fontSize: '1.1428571428571428em',
    fontWeight,
    marginBottom: gutterBottom && 8,
  })
);

export const Link = styled(Typography.Link)(
  ({ align = 'left', fontWeight }) => ({
    textAlign: align,
    fontSize: '1.1428571428571428em',
    fontWeight,
  })
);

export const Title = styled(Typography.Title)(
  ({ align = 'left', transform = 'none', fontWeight }) => ({
    textAlign: align,
    fontWeight,
    textTransform: transform,
  })
);
