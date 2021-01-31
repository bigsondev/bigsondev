import { useEffect } from 'react';

export const ScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};
