import { Button } from 'antd';
import styled from 'styled-components';

const colorMapper = {
  normal: '#2f4586e8',
  promotion: '#FFC069',
};

export const PromoBannerButton = styled(Button)(({ color = 'normal' }) => ({
  color: `${colorMapper[color]} !important`,
  width: 250,
  height: '3.25rem',
  fontSize: 18,
  fontStyle: 'italic',
  fontWeight: 500,
  borderRadius: 24,
  letterSpacing: 1,
  border: `1px solid ${colorMapper[color]} !important`,
  backgroundColor: '#FAFAFA !important',
  margin: '1.5rem',
  transition: 'box-shadow 0.3s',
  textTransform: 'uppercase',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px ${colorMapper[color]}`,
    backgroundColor: '#FAFAFA !important',
    color: `${colorMapper[color]} !important`,
    border: `1px solid ${colorMapper[color]} !important`,
  },
}));
