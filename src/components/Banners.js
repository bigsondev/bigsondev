import React, { useState, useEffect } from 'react';

import { getItem } from '~utils';

import { CookieBanner } from './layout/CookieBanner';

export const Banners = () => {
  const areCookiesAcknowledged = getItem('cookiesAcknowledged') === 'true';

  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 1000) {
      setHasScrolled(true);
    }
  };

  const handleCookieBannerClick = () => {};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled, areCookiesAcknowledged]);

  return (
    <>
      {!areCookiesAcknowledged && (
        <CookieBanner
          hasScrolled={hasScrolled}
          onClick={handleCookieBannerClick}
        />
      )}
    </>
  );
};
