import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const RedocBrowser = ({ src }) => {
  useEffect(() => {
    // Load redoc script dynamically
    const redocScript = document.createElement('script');
    redocScript.src = '/_static/js/redoc.2.0.0-rc.23.min.js';
    redocScript.onload = () => {
      // Initialize Redoc after script loads
      if (window.Redoc) {
        window.Redoc.init(src, {}, document.getElementById('redoc-container'));
      }
    };
    document.body.appendChild(redocScript);

    // Cleanup
    return () => {
      document.body.removeChild(redocScript);
    };
  }, [src]); // src is a dependency, so useEffect will re-run if src changes

  return (
    <div>
      <div id="redoc-container"></div>
    </div>
  );
};

// Type checking for props
RedocBrowser.propTypes = {
  src: PropTypes.string.isRequired,
};

export default RedocBrowser;