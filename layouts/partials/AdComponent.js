import { useEffect } from 'react';

export const MyAdComponent = ({ slot, adHeight, adWidth, isMobile }) => {
  useEffect(() => {
    if (window && typeof window !== undefined) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'inline-block', width: adWidth, height: adHeight, textAlign: 'center' }}
      data-ad-client="ca-pub-9891586352099803"
      data-ad-slot={slot}
      data-ad-format={isMobile ? "horizontal" : "fluid"}
      data-full-width-responsive="false">
    </ins>
  );
};