import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pages from '../../pages';

// Keeps the tab title and description in sync when navigating between pages.
export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname.replace(/\/+$/, '') || '/'] || pages['/'];
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
  }, [pathname]);

  return null;
}
