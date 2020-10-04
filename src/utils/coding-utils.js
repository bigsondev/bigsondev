import $ from 'cash-dom';

const IFRAME_ID_CASH = '#bigsondev-result-iframe';
const IFRAME_ID_DOM = 'bigsondev-result-iframe';

export const getIframeContent = () => $(IFRAME_ID_CASH).contents();

export const getJsRaw = () =>
  $(IFRAME_ID_CASH).contents().find('script').text().trim();

export const getJs = () =>
  typeof window !== 'undefined'
    ? window.document.getElementById(IFRAME_ID_DOM).contentWindow
    : undefined;
