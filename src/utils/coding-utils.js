import $ from 'cash-dom';

const IFRAME_ID = '#BigsonDev__ResultIframe';

export const getIframeContent = () => $(IFRAME_ID).contents();

export const getJs = () => $(IFRAME_ID).contents().find('script');
