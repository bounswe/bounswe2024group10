import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import styles from "./styles/Portfolio.module.css";
import { getPortfolio, getAssetDetails ,getAllAssets,addAssetToPortfolio} from "../services/portfolio"; // Import services
import { AuthData } from "../auth/AuthWrapper"; // Import authentication wrapper
import MiniChartWidget from "../components/structure/MiniChartWidget";

ChartJS.register(ArcElement, Tooltip, Legend);

const Portfolio = () => {
  const { user } = AuthData(); // Retrieve user information
  const [portfolio, setPortfolio] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null); // Track selected asset for modal
  const [showAddModal, setShowAddModal] = useState(false); // Track add asset modal state
  const [allAssets, setAllAssets] = useState([]);
  const [newAsset, setNewAsset] = useState({ symbol: "", amount: "" }); // New asset data

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!user || !user.name) {
        setError("User is not logged in.");
        setLoading(false);
        return;
      }

      try {
        const data = await getPortfolio(user.name);
        const portfoliosWithPrices = await Promise.all(
          data.portfolios.map(async (item) => {
            const assetDetails = await getAssetDetails(item.asset.yahooFinanceSymbol);

            return {
              ...item,
              lastPrice: assetDetails.lastPrice, // Add price data to the asset
            };
          })
        );
        setPortfolio(portfoliosWithPrices);
        const totalValueCalculated = portfoliosWithPrices.reduce(
          (sum, item) => sum + item.lastPrice * item.amount,
          0
        );
        setTotalValue(totalValueCalculated);

        // Prepare chart data
        const labels = portfoliosWithPrices.map((item) => item.asset.name);
        const values = portfoliosWithPrices.map(
          (item) => item.lastPrice * item.amount
        );

        setChartData({
            labels,
            datasets: [
              {
                label: "Portfolio Value",
                data: values,
                backgroundColor: [
                  "#FF6384", // Red
                  "#36A2EB", // Blue
                  "#FFCE56", // Yellow
                  "#5d5fef", // Theme color
                  "#4BC0C0", // Teal
                  "#F7464A", // Bright Red
                  "#46BFBD", // Aqua
                  "#FDB45C", // Orange
                  "#949FB1", // Grey
                  "#4D5360", // Dark Grey
                ],
                hoverBackgroundColor: [
                  "#FF6384", // Red
                  "#36A2EB", // Blue
                  "#FFCE56", // Yellow
                  "#5d5fef", // Theme color
                  "#4BC0C0", // Teal
                  "#F7464A", // Bright Red
                  "#46BFBD", // Aqua
                  "#FDB45C", // Orange
                  "#949FB1", // Grey
                  "#4D5360", // Dark Grey
                ],
              },
            ],
          });
      } catch (err) {
        setError(err.message || "Failed to fetch portfolio.");
      } finally {
        setLoading(false);
      }
    };

    const fetchAssets = async () => {
      try {
        const assets = await getAllAssets(); // Fetch all assets
        setAllAssets(assets);
      } catch (err) {
        console.error("Error fetching assets:", err);
      }
    };

    fetchPortfolio();
    fetchAssets(); // Fetch available assets for the dropdown
  }, [user]);

  const handleCardClick = (asset) => {
    setSelectedAsset(asset); // Set the selected asset for the modal
  };

  const closeModal = () => {
    setSelectedAsset(null); // Close the modal
  };

  const handleAddAsset = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
    setNewAsset({ symbol: "", amount: "" }); // Reset new asset data
  };

  const handleAddSubmit = async () => {
    try {
        console.log(newAsset);
      const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      const response = await addAssetToPortfolio(
        user.name, // Pass username
        newAsset.assetId, // Selected asset ID
        newAsset.amount, // Entered amount
        token // Authorization token
      );
  
      if (response && response.successful) {
        alert('Asset added successfully!');
        closeAddModal();
        // Optionally refresh the portfolio data here
      } else {
        alert('Failed to add asset.');
      }
    } catch (error) {
      console.error('Error adding asset:', error);
      alert('Error adding asset.');
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading portfolio...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.portfolioPage}>
      <header className={styles.portfolioHeader}>
        <h1>My Portfolio</h1>
        <p>Total Value: <span>${totalValue ? totalValue.toFixed(2) : "N/A"}</span></p>
        <button className={styles.addAssetButton} onClick={handleAddAsset}>
          Add Asset
        </button>
        {chartData && (
          <div className={styles.chartContainer}>
            <Doughnut data={chartData} />
          </div>
        )}
      </header>

      <div className={styles.portfolioList}>
        {portfolio.length > 0 ? (
          portfolio.map((item) => (
            <div
              key={item.id}
              className={styles.portfolioCard}
              onClick={() => handleCardClick(item.asset)} // Handle card click
            >
              <img
                src={item.asset.imageUrl}
                alt={item.asset.name}
                className={styles.assetImage}
              />
              <div className={styles.assetDetails}>
                <h3>{item.asset.name}</h3>
                <p>Amount: <span>{item.amount}</span></p>
                <p>
                  Last Price:    
                  <span>${item.lastPrice !== undefined
                    ? item.lastPrice.toFixed(2)
                    : "N/A"}</span>
                </p>
                <p>
                  Total Value: <span>$
                  {item.lastPrice !== undefined
                    ? (item.amount * item.lastPrice).toFixed(2)
                    : "N/A"}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noPortfolio}>You have no assets in your portfolio.</p>
        )}
      </div>

      {/* Modal for chart */}
      {selectedAsset && (
        <div className={styles.modal}>
          <div className={styles.modalContent1}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <MiniChartWidget
              symbol={selectedAsset.tradingViewSymbol}
              name={selectedAsset.name}
            />
          </div>
        </div>
      )}

      {/* Modal for adding asset */}
      {showAddModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeAddModal}>
              &times;
            </button>
            <h2>Add Asset</h2>
            <form onSubmit={(e) => e.preventDefault()}>
            <label>
            Asset:
            <select
                value={newAsset.symbol}
                onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                const symbol = selectedOption.value;
                const assetId = selectedOption.getAttribute("data-id");

                // Log values to debug
                console.log("Selected Symbol:", symbol);
                console.log("Selected Asset ID:", assetId);

                // Update state
                setNewAsset({
                    ...newAsset,
                    symbol: symbol,
                    assetId: assetId, // Ensure assetId is stored as a number
                });
                }}
                required
            >
                <option value="" disabled>
                Select an Asset
                </option>
                {allAssets.map((asset) => (
                <option key={asset.id} value={asset.yahooFinanceSymbol} data-id={asset.id}>
                    {asset.name}
                </option>
                ))}
            </select>
            </label>
              <label>
                Amount:
                <input
                  type="number"
                  value={newAsset.amount}
                  onChange={(e) =>
                    setNewAsset({ ...newAsset, amount: e.target.value })
                  }
                  required
                />
              </label>
              <button onClick={handleAddSubmit} className={styles.submitButton}>
                Add Asset
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
