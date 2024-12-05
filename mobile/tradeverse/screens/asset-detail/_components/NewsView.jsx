import React from 'react'
import { WebView } from 'react-native-webview'

export default function NewsView({ symbol }) {
  return (
    <WebView
      style={{}}
      source={{
        html: `<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
  {
  "feedMode": "symbol",
  "symbol": "${symbol}",
  "isTransparent": false,
  "displayMode": "regular",
  "width": "100%",
  "height": "100%",
  "colorTheme": "light",
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->`,
      }}
    />
  )
}
