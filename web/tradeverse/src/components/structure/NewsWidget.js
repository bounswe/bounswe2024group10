import React, { useEffect, useRef } from "react";

function NewsWidget({ symbol }) {
  const container = useRef();

  useEffect(() => {
    // Clear the container before injecting the script
    if (container.current) {
      container.current.innerHTML = "";
    }

    // Create the TradingView widget script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;

    // Widget configuration
    script.innerHTML = JSON.stringify({
      feedMode: "symbol", // Use symbol-specific feed mode
      symbol: symbol, // Pass the dynamic symbol
      isTransparent: false,
      displayMode: "regular",
      width: 400,
      height: 550,
      colorTheme: "light",
      locale: "en",
    });

    // Append the script to the container
    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      // Clean up the widget on unmount
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [symbol]); // Re-run effect if the symbol changes

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default NewsWidget;
