import { Button } from 'antd';
import styled from 'styled-components';

export const SecondaryButton = styled(Button)({
  color: '#137099 !important',
  width: 250,
  height: '3.25rem',
  fontSize: '1.125rem',
  fontWeight: 500,
  borderRadius: 24,
  border: '1px solid #137099 !important',
  backgroundColor: '#FFF !important',
  margin: '1.5rem',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s, color 0.3s',

  '&:hover': {
    backgroundColor: '#137099 !important',
    color: '#FFF !important',
    border: '1px solid #137099 !important',
  },
});
