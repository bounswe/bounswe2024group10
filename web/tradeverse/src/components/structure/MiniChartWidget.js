// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

function MiniChartWidget({ symbol, name }) {
  const container = useRef();

  useEffect(() => {
    // Clear the container to prevent duplicates
    if (container.current) {
      container.current.innerHTML = '';
    }

    // Create the script element
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "${name}",
            "${symbol}|1D"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "headerFontSize": "medium",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }`;
    container.current.appendChild(script);
  }, [symbol, name]); // Re-run effect when symbol or name changes

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

// Define PropTypes for better developer experience
MiniChartWidget.propTypes = {
  symbol: PropTypes.string.isRequired, // The trading symbol (e.g., "AAPL")
  name: PropTypes.string.isRequired   // The display name (e.g., "Apple")
};

export default memo(MiniChartWidget);
