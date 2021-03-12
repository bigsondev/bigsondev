import { useEffect } from 'react';

export const useCarbonAds = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const scriptHolder =
      document.getElementById('bigsondev-mobile-ad-holder') ||
      document.getElementById('bigsondev-ad-holder');

    if (!scriptHolder) {
      return;
    }

    script.src =
      '//cdn.carbonads.com/carbon.js?serve=CESDT23U&placement=bigsondevcom';
    script.async = true;
    script.id = '_carbonads_js';

    scriptHolder.append(script);

    return () => {
      scriptHolder.remove(script);
    };
  }, []);
};
