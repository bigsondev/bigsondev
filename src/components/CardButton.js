import { Button } from 'antd';
import styled from 'styled-components';

export const CardButton = styled(Button)({
  color: '#FAFAFA !important',
  width: '80%',
  height: '3.25rem',
  fontSize: '1.125rem',
  fontStyle: 'italic',
  fontWeight: 500,
  borderRadius: 24,
  letterSpacing: 1,
  border: '1px solid #137099 !important',
  backgroundColor: '#137099 !important',
  margin: '1rem 0',
  transition: 'box-shadow 0.3s',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 0)',
  bottom: 0,
  textTransform: 'uppercase',

  '&:hover': {
    boxShadow: `0px 0px 5px 0px #137099`,
    backgroundColor: '#137099 !important',
    color: '#FAFAFA !important',
    border: '1px solid #137099 !important',
  },
});
