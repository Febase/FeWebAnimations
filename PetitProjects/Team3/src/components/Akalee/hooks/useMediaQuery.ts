import * as React from 'react';

const getMatches = (query: string): boolean => {
  if (typeof window === 'undefined') return true;
  return window.matchMedia(query).matches;
};

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = React.useState<boolean>(getMatches(query));

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => setMatches(getMatches(query));

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    handleChange();

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery
