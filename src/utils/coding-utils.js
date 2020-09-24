import $ from 'cash-dom';

const IFRAME_ID_CASH = '#BigsonDev__ResultIframe';
const IFRAME_ID_DOM = 'BigsonDev__ResultIframe';

export const getIframeContent = () => $(IFRAME_ID_CASH).contents();

export const getJsRaw = () =>
  $(IFRAME_ID_CASH).contents().find('script').text().trim();

export const getJs = () =>
  typeof window !== 'undefined'
    ? window.document.getElementById(IFRAME_ID_DOM).contentWindow
    : undefined;
