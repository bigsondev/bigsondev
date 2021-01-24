import styled from 'styled-components';

export const LogoHolder = styled.img({
  width: 128,
  height: 'auto',
  marginLeft: -3,
  marginTop: -5,

  '@media (max-width: 576px)': {
    marginTop: 8,
    marginLeft: 10,
  },
});

export const FooterLogo = styled.img({
  width: 128,
  height: 'auto',
  marginLeft: -8,

  '@media (max-width: 576px)': {
    marginLeft: -6,
  },
});
