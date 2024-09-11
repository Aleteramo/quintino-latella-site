import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize('TUO_GA4_ID');
    ReactGA.send('pageview');
  }, []);

  return null;
};

export default GoogleAnalytics;