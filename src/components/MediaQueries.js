import styled from 'styled-components';

export const MobileOnly = styled.div`
  @media (max-width: 480px) {
    display: block;
  }
  display: none;
`;

export const SmallOnly = styled.div`
  @media (max-width: 576px) {
    display: block;
  }
  display: none;
`;

export const ExceptSmall = styled.div`
  @media (min-width: 577px) {
    display: block;
  }
  display: none;
`;

export const TabletOnly = styled.div`
  @media (min-width: 481px) and (max-width: 999px) {
    display: block;
  }
  display: none;
`;

export const DesktopOnly = styled.div`
  @media (min-width: 1000px) {
    display: block;
  }
  display: none;
`;

export const XlOnly = styled.div`
  @media (min-width: 1200px) {
    display: block;
  }
  display: none;
`;

export const ExceptXl = styled.div`
  @media (max-width: 1199px) {
    display: block;
  }
  display: none;
`;
