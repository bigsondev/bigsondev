import { Button } from 'antd';
import styled from 'styled-components';

export const SecondaryButton = styled(Button)({
  color: '#24B2DB',
  width: 250,
  height: '3.25rem',
  fontSize: 18,
  fontWeight: 500,
  borderRadius: 24,
  border: '1px solid #24B2DB',
  backgroundColor: '#FFF',
  margin: '2rem',
  textTransform: 'uppercase',
  transition: 'background-color 0.3s, color 0.3s',

  '&:hover': {
    backgroundColor: '#24B2DB',
    color: '#FFF',
    border: '1px solid #24B2DB',
  },
  '&:active': {
    border: '1px solid #24B2DB',
  },
});
