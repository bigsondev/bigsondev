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

  #carbonads * {
    margin: initial;
    padding: initial;
  }
  #carbonads {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
      margin: 0 auto;
  }
  #carbonads {
    display: flex;
    max-width: 330px;
    background-color: hsl(0, 0%, 98%);
    box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
    z-index: 100;
  }
  #carbonads a {
    color: inherit;
    text-decoration: none;
  }
  #carbonads a:hover {
    color: inherit;
  }
  #carbonads span {
    position: relative;
    display: block;
    overflow: hidden;
  }
  #carbonads .carbon-wrap {
    display: flex;
  }
  #carbonads .carbon-img {
    display: block;
    margin: 0;
    line-height: 1;
  }
  #carbonads .carbon-img img {
    display: block;
  }
  #carbonads .carbon-text {
    font-size: 13px;
    padding: 10px;
    margin-bottom: 16px;
    line-height: 1.5;
    text-align: left;
  }
  #carbonads .carbon-poweredby {
    display: block;
    padding: 6px 8px;
    background: #f1f1f2;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 8px;
    line-height: 1;
    border-top-left-radius: 3px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
