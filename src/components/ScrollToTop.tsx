import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Optional offset if you have a fixed navbar
    const yOffset = -100; 

    if (hash) {
      // Scroll to the element with smooth behavior
      const element = document.querySelector(hash);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // No hash, scroll to top immediately
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
