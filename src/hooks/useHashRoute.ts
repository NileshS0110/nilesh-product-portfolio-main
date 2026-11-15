import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'case'; slug: 'cimet' | 'gupshup' | 'sprinklr' }
  | { name: 'ai-portfolio' }
  | { name: 'ai-case'; slug: 'cimet' | 'gupshup' | 'sprinklr' | 'employee-assistant' | 'placement-career-coach' };

export function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, '');
  if (h === 'case/cimet') return { name: 'case', slug: 'cimet' };
  if (h === 'case/gupshup') return { name: 'case', slug: 'gupshup' };
  if (h === 'case/sprinklr') return { name: 'case', slug: 'sprinklr' };
  if (h === 'ai-portfolio') return { name: 'ai-portfolio' };
  if (h === 'ai/cimet') return { name: 'ai-case', slug: 'cimet' };
  if (h === 'ai/gupshup') return { name: 'ai-case', slug: 'gupshup' };
  if (h === 'ai/sprinklr') return { name: 'ai-case', slug: 'sprinklr' };
  if (h === 'ai/employee-assistant') return { name: 'ai-case', slug: 'employee-assistant' };
  if (h === 'ai/placement-career-coach') return { name: 'ai-case', slug: 'placement-career-coach' };
  return { name: 'home' };
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== 'undefined' ? parseHash() : { name: 'home' }
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}

export function navigate(path: string) {
  window.location.hash = path;
}
