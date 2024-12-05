import React from 'react'
import { WebView } from 'react-native-webview'

export default function AssetInfoView({ symbol }) {
  return (
    <WebView
      style={{}}
      source={{
        html: `<!-- TradingView Widget BEGIN -->
      <div class="tradingview-widget-container" style="border:none;">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js" async>
        {
        "width": "100%",
        "height": "100%",
        "autosize": true,
        "isTransparent": true,
        "colorTheme": "light",
        "symbol": "${symbol}",
        "locale": "en"
      }
        </script>
      </div>
      <!-- TradingView Widget END -->`,
      }}
    />
  )
}
