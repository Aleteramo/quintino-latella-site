import React, { useEffect } from 'react';

const FacebookPixel = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('TUO_PIXEL_ID');
        ReactPixel.pageView();
      });
  }, []);

  return null;
};

export default FacebookPixel;