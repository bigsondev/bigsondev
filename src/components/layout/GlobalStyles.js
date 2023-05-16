import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    max-width: 100%;
    overflow-x: hidden;
    background-color: #FAFAFA;
  }
  
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

  .bigsondev-trial-notification {
    @media (max-width: 480px) {
      width: 100%;
      margin-bottom: 0;
    }
  }

  .ant-notification {
    @media (max-width: 480px) {
      margin-right: 16px;
    }
  }
`;
