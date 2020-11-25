import styled from 'styled-components';

export const Logo = styled.img({
  width: 96,
  height: 'auto',
  marginLeft: -16,
  marginTop: -5,

  '@media (max-width: 576px)': {
    marginTop: 8,
  },
});
