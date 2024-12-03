import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const AssetInfoWidget = ({ symbol }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "800",
      height: "400",
      isTransparent: true,
      colorTheme: "light",
      symbol: symbol, // Use the prop value here
      locale: "en",
    });

    containerRef.current.appendChild(script);

    return () => {
      // Cleanup: Remove the script when the component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [symbol]); // Re-run the effect if the symbol changes

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        
      </div>
    </div>
  );
};

AssetInfoWidget.propTypes = {
  symbol: PropTypes.string.isRequired, // Ensure the symbol is passed as a required prop
};

export default AssetInfoWidget;
