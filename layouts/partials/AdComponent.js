import { useEffect } from 'react';

const MyAdComponent = ({ slot, adHeight, adWidth, isMobile }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9891586352099803';
      script.crossOrigin = 'anonymous';
      script.strategy = 'lazyOnload';

      const timeoutId = setTimeout(() => {
        document.body.appendChild(script);

        // Try pushing to adsbygoogle, and catch errors
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.log(error);
        }
      }, 1000);

      const cleanup = () => {
        clearTimeout(timeoutId);
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };

      // Register the cleanup function
      return cleanup;
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', width: adWidth, height: adHeight, textAlign: 'center' }}
      data-ad-client="ca-pub-9891586352099803"
      data-ad-slot={slot}
      data-ad-format={isMobile ? 'horizontal' : 'fluid'}
      data-full-width-responsive="false"
      data-adtest="on"
    ></ins>
  );
};

export default MyAdComponent;
