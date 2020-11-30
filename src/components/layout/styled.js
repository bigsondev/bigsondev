import styled from 'styled-components';

export const Logo = styled.img({
  width: 96,
  height: 'auto',
  marginLeft: -10,
  marginTop: -5,

  '@media (max-width: 576px)': {
    marginTop: 8,
    marginLeft: 2,
  },
});

export const FooterLogo = styled.img({
  width: 96,
  height: 'auto',
  marginLeft: -16,

  '@media (max-width: 576px)': {
    marginLeft: -12,
  },
});
