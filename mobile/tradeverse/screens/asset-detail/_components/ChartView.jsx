import React from 'react'
import { WebView } from 'react-native-webview'

export default function ChartView({ symbol, dateRange }) {
  const uri = `https://www.tradingview.com/symbols/${symbol}/`
  return (
    <WebView
      style={{}}
      source={{
        html: `
        
      <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container" style="pointer-events:none;">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
  {
  "symbol": "${symbol}",
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "dateRange": "${dateRange}",
  "colorTheme": "light",
  "isTransparent": true,
  "autosize": true,
  "largeChartUrl": ""
}
  </script>
</div>
<!-- TradingView Widget END -->
        
        `,
      }}
    />
  )
}
