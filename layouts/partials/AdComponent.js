import { useEffect } from 'react';

export const MyAdComponent = ({ client, slot }) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div className='adsense-div' style={{width: '100%'}}>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true">
      </ins>
    </div>
  );
};