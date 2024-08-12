import React from "react";
import { useEffect, useRef } from "react";

const LazyImage = ({ src, alt, className}) => {
    const imgRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const imgElement = entry.target;
              if (imgElement instanceof HTMLImageElement) {
                imgElement.src = imgElement.dataset.src;
                observer.unobserve(imgElement);
              }
            }
          });
        },
        { threshold: 0.1 } // Adjust the threshold as needed
      );
  
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
  
      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }, []);
  
    return <img ref={imgRef} data-src={src} alt={alt} className= {className} />;
  };

  export default LazyImage