import { useEffect } from 'react';

export const MyAdComponent = ({client, slot}) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client={client}
         data-ad-slot={slot}
         data-ad-format="auto">
    </ins>
  );
};