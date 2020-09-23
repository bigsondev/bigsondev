import { Button } from 'antd';
import styled from 'styled-components';

export const PrimaryButton = styled(Button)({
  color: '#FFF',
  width: 250,
  height: '3.25rem',
  fontSize: '1.125rem',
  fontStyle: 'italic',
  fontWeight: 500,
  borderRadius: 24,
  letterSpacing: 1,
  border: '1px solid #24B2DB',
  backgroundColor: '#24B2DB',
  margin: '1.5rem',
  transition: 'box-shadow 0.3s',
  textTransform: 'uppercase',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #24B2DB`,
    backgroundColor: '#24B2DB',
    color: '#FFF',
    border: '1px solid #24B2DB',
  },
  '&:active': {
    border: '1px solid #24B2DB',
  },
});
