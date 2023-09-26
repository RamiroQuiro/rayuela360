import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const referencia = useRef(null);

  useEffect(() => {
    if (!referencia.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, options);

    observer.observe(referencia.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { referencia, isIntersecting };
}

export default useIntersectionObserver;
