package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    List<Portfolio> findByUsername(String username);
    List<Portfolio> findByAssetId(Long assetId);
    boolean existsByUsernameAndAssetId(String username, Long assetId);
}
