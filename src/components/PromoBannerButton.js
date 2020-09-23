import { Button } from 'antd';
import styled from 'styled-components';

export const PromoBannerButton = styled(Button)({
  color: '#455991',
  width: 250,
  height: '3.25rem',
  fontSize: 18,
  fontStyle: 'italic',
  fontWeight: 500,
  borderRadius: 24,
  letterSpacing: 1,
  border: '1px solid #455991',
  backgroundColor: '#FFF',
  margin: '1.5rem',
  transition: 'box-shadow 0.3s',
  textTransform: 'uppercase',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #455991`,
    backgroundColor: '#FFF',
    color: '#455991',
    border: '1px solid #455991',
  },
  '&:active': {
    border: '1px solid #455991',
  },
});
