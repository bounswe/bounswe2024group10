import React, { useEffect, useRef, useState, memo } from "react";

function TradingViewWidget({ symbol }) {
  const container = useRef();

  useEffect(() => {
    if (container.current && symbol) {
      // Clear any existing widget before rendering a new one
      container.current.innerHTML = "";

      // Create the TradingView widget script
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `{
        "width": "100%",
        "height": "410",
        "symbol": "${symbol}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": false,
        "calendar": false
      }`;
      container.current.appendChild(script);
    }
  }, [symbol]); // Re-run effect whenever the `symbol` prop changes

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

function ChartContainer({ symbol }) {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowChart((prev) => !prev)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: "#5d5fef",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {showChart ? "Hide Chart" : "See the Chart"}
      </button>

      {showChart && symbol && <TradingViewWidget symbol={symbol} />}
    </div>
  );
}

export default memo(ChartContainer);
