package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetRepository extends JpaRepository<Asset, Long> {
    Asset findByName(String name);
    Asset findByYahooFinanceSymbol(String yahooFinanceSymbol);
    Asset findByTradingViewSymbol(String tradingViewSymbol);
    boolean existsById(Long id);
    boolean existsByName(String name);
    boolean existsByYahooFinanceSymbol(String yahooFinanceSymbol);
    boolean existsByTradingViewSymbol(String tradingViewSymbol);
} 