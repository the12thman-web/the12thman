import React, { useEffect } from 'react';

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('adsense error', error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', width: '100%' }}
      data-ad-client="ca-pub-9891586352099803"
      data-ad-slot="5294261220"
      data-ad-format="fluid"
      data-full-width-responsive="true"
      data-ad-layout="in-article"
    ></ins>
  );
}
