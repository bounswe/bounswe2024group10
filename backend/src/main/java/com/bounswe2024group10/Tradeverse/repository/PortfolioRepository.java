package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {

    // Find portfolios by username
    List<Portfolio> findByUsername(String username);

    // Find a portfolio by its ID
    Optional<Portfolio> findById(Long id);

    // Check if a portfolio exists by username and portfolio name (used for create check)
    boolean existsByUsernameAndName(String username, String name);

    // Delete portfolio by ID (provided by JpaRepository)
    void deleteById(Long id);
}
