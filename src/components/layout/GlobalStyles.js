import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @media (max-width: 480px) {
    html {
        font-size: 14px;
    }
  }

  @media (min-width: 480px) {
    html {
        font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    html {
        font-size: 15px;
    }
  }

  @media (min-width: 992px) {
    html {
        font-size: 15px;
    }
  }

  @media (min-width: 1200px) {
    html {
        font-size: 15px;
    }
  }

  @media (min-width: 1600px) {
    html {
        font-size: 16px;
    }
  }
`;
