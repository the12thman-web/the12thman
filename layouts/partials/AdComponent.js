import { useEffect } from 'react';

export const MyAdComponent = ({ slot, isResponsive, adWidth, adHeight, isMobile }) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: isResponsive ? 'block' : 'inline-block', width: isResponsive ? '100%' : adWidth, height: isResponsive ? '100%' : adHeight }}
      data-ad-client="ca-pub-9891586352099803"
      data-ad-slot={slot}
      // data-ad-format="auto"
      data-full-width-responsive={isResponsive ? "true" : "false"}>
    </ins>
  );
};