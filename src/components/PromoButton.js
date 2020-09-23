import { Button } from 'antd';
import styled from 'styled-components';

const SIZE_MAPPER = {
  small: {
    width: 150,
    height: '2.5rem',
    fontSize: 18,
  },
  normal: {
    width: 300,
    height: '3.5rem',
    fontSize: 22,
  },
};

export const PromoButton = styled(Button)(({ size = 'normal' }) => ({
  width: SIZE_MAPPER[size].width,
  height: SIZE_MAPPER[size].height,
  fontSize: SIZE_MAPPER[size].fontSize,
  fontWeight: 500,
  borderRadius: 24,
  color: '#FFF',
  background: '#ffc069',
  border: 'none',
  transition: 'box-shadow 0.3s',
  position: 'relative',
  bottom: 4,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #ffc069`,
    background: '#ffc069',
    color: '#FFF',
  },
  '&:active': {
    background: '#ffc069',
  },
}));
