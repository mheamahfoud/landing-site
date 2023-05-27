import React, { useEffect, useRef, useState } from 'react';

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const duration = 3000; // Animation duration in milliseconds
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = Math.ceil((value - displayValue) / duration * progress);

            if (progress < duration && displayValue < value) {
              setDisplayValue(displayValue + increment);
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, displayValue]);

  return <>
  <span >+</span><span ref={numberRef}>{displayValue.toLocaleString("en-US")}</span>
</>
  
 
  

};

export default NumberDisplay;
