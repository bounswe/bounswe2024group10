import React from 'react';
import AssetInfoWidget from '../components/structure/AssetInfoWidget';
import ChartContainer from '../components/structure/TradingViewWidget';
import NewsWidget from '../components/structure/NewsWidget';
import styles from './styles/AssetInfo.module.css'; // Import the CSS module

const AssetInfo = () => {
    return (
        <div className={styles.assetInfoPage}>
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    <AssetInfoWidget symbol="NASDAQ:AAPL" />
                    <ChartContainer symbol="NASDAQ:AAPL" />
                </div>
                <div className={styles.sidebar}>
                    <NewsWidget  symbol="NASDAQ:AAPL"/>
                </div>
            </div>
        </div>
    );
};

export default AssetInfo;
