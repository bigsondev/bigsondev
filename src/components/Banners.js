import React, { useState, useEffect } from 'react';
import Drift from 'react-driftjs';

import { getItem } from '~utils';

import { CookieBanner } from './layout/CookieBanner';

export const Banners = ({ pathname }) => {
  const areCookiesAcknowledged = getItem('cookiesAcknowledged') === 'true';
  const shouldShowChat = [
    '/',
    '/mentorship/',
    '/mentorship',
    '/reach-out',
    '/reach-out/',
  ].includes(pathname);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [showChat, setShowChat] = useState(
    areCookiesAcknowledged && shouldShowChat
  );

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setHasScrolled(true);
    }
  };

  const handleCookieBannerClick = () => {
    setShowChat(shouldShowChat);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showChat && <Drift appId="vwxb94u6dzmc" />}
      {!areCookiesAcknowledged && (
        <CookieBanner
          hasScrolled={hasScrolled}
          onClick={handleCookieBannerClick}
        />
      )}
    </>
  );
};
