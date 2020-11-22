import { Button } from 'antd';
import styled from 'styled-components';

const SIZE_MAPPER = {
  small: {
    width: 200,
    height: '2.5rem',
    fontSize: '1.125rem',
    margin: 0,
  },
  normal: {
    width: 250,
    height: '3.25rem',
    fontSize: '1.125rem',
    margin: '1.5rem',
  },
};

export const SecondaryButton = styled(Button)(({ size = 'normal' }) => ({
  width: SIZE_MAPPER[size].width,
  height: SIZE_MAPPER[size].height,
  fontSize: SIZE_MAPPER[size].fontSize,
  margin: SIZE_MAPPER[size].margin,
  color: '#137099 !important',
  fontWeight: 500,
  borderRadius: 24,
  border: '1px solid #137099 !important',
  backgroundColor: '#FAFAFA !important',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s, color 0.3s',

  '&:hover': {
    backgroundColor: '#137099 !important',
    color: '#FAFAFA !important',
    border: '1px solid #137099 !important',
  },
}));
