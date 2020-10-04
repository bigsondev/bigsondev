import { Button } from 'antd';
import styled from 'styled-components';

const SIZE_MAPPER = {
  small: {
    width: 150,
    height: '2.5rem',
    fontSize: '1.125rem',
    margin: 0,
  },
  normal: {
    width: '18rem',
    height: '3.5rem',
    fontSize: '1.375rem',
    margin: '1rem 0',
  },
};

export const PromoButton = styled(Button)(({ size = 'normal' }) => ({
  width: SIZE_MAPPER[size].width,
  height: SIZE_MAPPER[size].height,
  fontSize: SIZE_MAPPER[size].fontSize,
  margin: SIZE_MAPPER[size].margin,
  fontWeight: 500,
  borderRadius: 24,
  color: '#FFF !important',
  backgroundColor: '#F9B060 !important',
  border: 'none',
  transition: 'box-shadow 0.3s',
  position: 'relative',
  bottom: 4,

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #F9B060`,
    backgroundColor: '#F9B060 !important',
    color: '#FFF !important',
  },
}));
