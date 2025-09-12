import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally disconnect after first trigger
          if (options.triggerOnce !== false) {
            observer.disconnect();
          }
        } else if (options.triggerOnce === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [elementRef, isVisible];
};

export const useScrollAnimationMultiple = (options = {}) => {
  const [elements, setElements] = useState([]);

  const addElement = (element) => {
    if (element && !elements.includes(element)) {
      setElements(prev => [...prev, element]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          } else if (options.triggerOnce === false) {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [elements, options.threshold, options.rootMargin, options.triggerOnce]);

  return addElement;
};