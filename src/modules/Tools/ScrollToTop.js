import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Links like /art#fibonacci jump to that section, everything else starts at the top
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto'; // Restore default behavior on unmount
      }
    };
  }, []);
}
