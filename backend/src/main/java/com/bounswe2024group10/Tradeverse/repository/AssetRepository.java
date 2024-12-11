package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bounswe2024group10.Tradeverse.model.Asset;

public interface AssetRepository extends JpaRepository<Asset, Long> {

    Asset findByName(String name);

    Asset findByYahooFinanceSymbol(String yahooFinanceSymbol);

    Asset findByTradingViewSymbol(String tradingViewSymbol);

    boolean existsById(Long id);

    boolean existsByName(String name);

    boolean existsByYahooFinanceSymbol(String yahooFinanceSymbol);

    boolean existsByTradingViewSymbol(String tradingViewSymbol);

    @Query("SELECT a FROM Asset a WHERE a.name LIKE %:keyword% OR a.yahooFinanceSymbol LIKE %:keyword% OR a.tradingViewSymbol LIKE %:keyword%")
    List<Asset> findByKeyword(String keyword);
}
