import { useEffect } from 'react';

export const MyAdComponent = ({ slot, isResponsive, adWidth }) => {
  useEffect(() => {
    if (window && typeof window !== undefined) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block', width: '100%', textAlign: 'center', }}
      data-ad-client="ca-pub-9891586352099803"
      data-ad-slot={slot}
      data-ad-format="fluid"
      data-full-width-responsive="true"
      data-ad-layout="in-article">
    </ins>
  );
};