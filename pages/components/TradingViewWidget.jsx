"use client"
import { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500"
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100"
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD"
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin"
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum"
        }
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en"
    });
    document.getElementById('tradingview-widget-container').appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container bg-white flex flex-row" id="tradingview-widget-container" >
      
    </div>
  );
};

export default TradingViewWidget;
