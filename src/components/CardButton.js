import { Button } from 'antd';
import styled from 'styled-components';

export const CardButton = styled(Button)({
  color: '#FFF !important',
  width: '80%',
  height: '3.25rem',
  fontSize: '1.125rem',
  fontStyle: 'italic',
  fontWeight: 500,
  borderRadius: 24,
  letterSpacing: 1,
  border: '1px solid #24B2DB',
  backgroundColor: '#24B2DB !important',
  margin: '1rem 0',
  transition: 'box-shadow 0.3s',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  bottom: 0,
  textTransform: 'uppercase',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #24B2DB`,
    backgroundColor: '#24B2DB !important',
    color: '#FFF !important',
    border: '1px solid #24B2DB',
  },
});
