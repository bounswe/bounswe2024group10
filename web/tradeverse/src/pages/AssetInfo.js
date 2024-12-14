import React, { useEffect, useState } from 'react';
import AssetInfoWidget from '../components/structure/AssetInfoWidget';
import ChartContainer from '../components/structure/TradingViewWidget';
import NewsWidget from '../components/structure/NewsWidget';
import styles from './styles/AssetInfo.module.css'; // Import the CSS module
import { useParams } from "react-router-dom";

const AssetInfo = () => {
    const { id } = useParams(); // Get ID from route params
    const [assetData, setAssetData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch asset details by ID
        const fetchAssetDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/asset/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch asset details: ${response.statusText}`);
                }
                const data = await response.json();
                setAssetData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAssetDetails();
    }, [id]);

    if (loading) {
        return <div>Loading asset details...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!assetData) {
        return <div>No asset data available</div>;
    }

    return (
        <div className={styles.assetInfoPage}>
            <div className={styles.contentContainer}>
                <div className={styles.mainContent}>
                    {/* Pass asset data to components */}
                    <h1 style={{textAlign:'center',color:"#2962ff"}}>{assetData.name}</h1>
                    <AssetInfoWidget symbol={assetData.tradingViewSymbol} />
                    <ChartContainer symbol={assetData.tradingViewSymbol} />
                </div>
                <div className={styles.sidebar}>
                    <NewsWidget symbol={assetData.tradingViewSymbol} />
                </div>
            </div>
        </div>
    );
};

export default AssetInfo;
