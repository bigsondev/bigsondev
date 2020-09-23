import { Button } from 'antd';
import styled from 'styled-components';

export const SecondaryButton = styled(Button)({
  color: '#24B2DB !important',
  width: 250,
  height: '3.25rem',
  fontSize: '1.125rem',
  fontWeight: 500,
  borderRadius: 24,
  border: '1px solid #24B2DB !important',
  backgroundColor: '#FFF !important',
  margin: '1.5rem',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s, color 0.3s',

  '&:hover': {
    backgroundColor: '#24B2DB !important',
    color: '#FFF !important',
    border: '1px solid #24B2DB !important',
  },
});
