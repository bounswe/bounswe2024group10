//
export const allAssets = [
  {
    abbreviation: "BTC",
    label: "Bitcoin",
    image: "https://example.com/btc.png",
  },
  {
    abbreviation: "ETH",
    label: "Ethereum",
    image: "https://example.com/eth.png",
  },
  {
    abbreviation: "LTC",
    label: "Litecoin",
    image: "https://example.com/ltc.png",
  },
  {
    abbreviation: "AAPL",
    label: "Apple Inc.",
    image: "https://example.com/aapl.png",
  },
  {
    abbreviation: "GOOGL",
    label: "Alphabet Inc.",
    image: "https://example.com/googl.png",
  },
  {
    abbreviation: "AMZN",
    label: "Amazon.com Inc.",
    image: "https://example.com/amzn.png",
  },
  {
    abbreviation: "TSLA",
    label: "Tesla Inc.",
    image: "https://example.com/tsla.png",
  },
  {
    abbreviation: "XAU",
    label: "Gold",
    image: "https://example.com/xau.png",
  },
  {
    abbreviation: "XAG",
    label: "Silver",
    image: "https://example.com/xag.png",
  },
  {
    abbreviation: "EURUSD",
    label: "Euro/US Dollar",
    image: "https://example.com/eurusd.png",
  },
  {
    abbreviation: "GBPUSD",
    label: "British Pound/US Dollar",
    image: "https://example.com/gbpusd.png",
  },
  {
    abbreviation: "USDJPY",
    label: "US Dollar/Japanese Yen",
    image: "https://example.com/usdjpy.png",
  },
  {
    abbreviation: "USDCAD",
    label: "US Dollar/Canadian Dollar",
    image: "https://example.com/usdcad.png",
  },
  {
    abbreviation: "WTI",
    label: "West Texas Intermediate (Crude Oil)",
    image: "https://example.com/wti.png",
  },
  {
    abbreviation: "BRN",
    label: "Brent Crude Oil",
    image: "https://example.com/brn.png",
  },
  {
    abbreviation: "SP500",
    label: "S&P 500 Index",
    image: "https://example.com/sp500.png",
  },
  {
    abbreviation: "DJIA",
    label: "Dow Jones Industrial Average",
    image: "https://example.com/djia.png",
  },
  {
    abbreviation: "NDAQ",
    label: "NASDAQ 100 Index",
    image: "https://example.com/ndaq.png",
  },
  {
    abbreviation: "BABA",
    label: "Alibaba Group",
    image: "https://example.com/baba.png",
  },
  {
    abbreviation: "NFLX",
    label: "Netflix Inc.",
    image: "https://example.com/nflx.png",
  },
  {
    abbreviation: "MSFT",
    label: "Microsoft Corporation",
    image: "https://example.com/msft.png",
  },
  {
    abbreviation: "V",
    label: "Visa Inc.",
    image: "https://example.com/visa.png",
  },
  {
    abbreviation: "JPM",
    label: "JPMorgan Chase & Co.",
    image: "https://example.com/jpm.png",
  },
  {
    abbreviation: "FB",
    label: "Meta Platforms (Facebook)",
    image: "https://example.com/fb.png",
  },
  {
    abbreviation: "BA",
    label: "The Boeing Company",
    image: "https://example.com/ba.png",
  },
  {
    abbreviation: "NVDA",
    label: "NVIDIA Corporation",
    image: "https://example.com/nvda.png",
  },
  {
    abbreviation: "EUR",
    label: "Euro",
    image: "https://example.com/eur.png",
  },
  {
    abbreviation: "USD",
    label: "US Dollar",
    image: "https://example.com/usd.png",
  },
  {
    abbreviation: "GBP",
    label: "British Pound",
    image: "https://example.com/gbp.png",
  },
  {
    abbreviation: "JPY",
    label: "Japanese Yen",
    image: "https://example.com/jpy.png",
  },
  {
    abbreviation: "CAD",
    label: "Canadian Dollar",
    image: "https://example.com/cad.png",
  },
  {
    abbreviation: "AUD",
    label: "Australian Dollar",
    image: "https://example.com/aud.png",
  },
  {
    abbreviation: "CHF",
    label: "Swiss Franc",
    image: "https://example.com/chf.png",
  },
  {
    abbreviation: "CNY",
    label: "Chinese Yuan",
    image: "https://example.com/cny.png",
  },
  {
    abbreviation: "MXN",
    label: "Mexican Peso",
    image: "https://example.com/mxn.png",
  },
  {
    abbreviation: "SGD",
    label: "Singapore Dollar",
    image: "https://example.com/sgd.png",
  },
  {
    abbreviation: "KRW",
    label: "South Korean Won",
    image: "https://example.com/krw.png",
  },
  {
    abbreviation: "RUB",
    label: "Russian Ruble",
    image: "https://example.com/rub.png",
  },
  {
    abbreviation: "ZAR",
    label: "South African Rand",
    image: "https://example.com/zar.png",
  },
  {
    abbreviation: "TRY",
    label: "Turkish Lira",
    image: "https://example.com/try.png",
  },
  {
    abbreviation: "HKD",
    label: "Hong Kong Dollar",
    image: "https://example.com/hkd.png",
  },
  {
    abbreviation: "INR",
    label: "Indian Rupee",
    image: "https://example.com/inr.png",
  },
  {
    abbreviation: "BRL",
    label: "Brazilian Real",
    image: "https://example.com/brl.png",
  },
  {
    abbreviation: "ARS",
    label: "Argentine Peso",
    image: "https://example.com/ars.png",
  },
  {
    abbreviation: "CLP",
    label: "Chilean Peso",
    image: "https://example.com/clp.png",
  },
  {
    abbreviation: "NZD",
    label: "New Zealand Dollar",
    image: "https://example.com/nzd.png",
  },
  {
    abbreviation: "COP",
    label: "Colombian Peso",
    image: "https://example.com/cop.png",
  },
].map((asset, index) => {
  return {
    ...asset,
    id: index + 1,
  };
});
