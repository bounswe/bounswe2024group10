import React from 'react'
import { WebView } from 'react-native-webview'

export default function ChartView({ symbol, dateRange }) {
  return (
    <WebView
      style={{ flex: 1 }}
      scalesPageToFit={true}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{
        html: `
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          </head>
          <body>
            <!-- TradingView Widget BEGIN -->
            <div class="tradingview-widget-container" style="pointer-events:none;">
              <div class="tradingview-widget-container__widget"></div>
              <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
              {
                "symbol": "${symbol}",
                "width": "100%",
                "height": "100%",
                "locale": "en",
                "dateRange": "${dateRange.value}",
                "colorTheme": "light",
                "isTransparent": true,
                "autosize": true,
                "largeChartUrl": ""
              }
              </script>
            </div>
            <!-- TradingView Widget END -->
          </body>
        </html>
        `,
      }}
      originWhitelist={['*']}
    />
  )
}
