package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.portfolio.*;
import com.bounswe2024group10.Tradeverse.model.Portfolio;
import com.bounswe2024group10.Tradeverse.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    public CreatePortfolioResponse createPortfolio(CreatePortfolioRequest request) {
        // Check if a portfolio already exists for the given username
        Boolean exists = portfolioRepository.existsByUsernameAndName(request.getUsername(), request.getName());
        if (exists) {
            return new CreatePortfolioResponse(false, null, null, null,"A portfolio with this username already exists");
        }

        // Create the new portfolio object from the request
        Portfolio portfolio = new Portfolio(request.getUsername(), request.getName(), request.getAmount());

        try {
            // Save the portfolio to the repository
            Portfolio savedPortfolio = portfolioRepository.save(portfolio);
            return new CreatePortfolioResponse(true, savedPortfolio.getId(), savedPortfolio.getUsername(), savedPortfolio.getName(),"Portfolio created successfully");

        } catch (DataIntegrityViolationException e) {
            // Handle the case where the name already exists in the database
            return new CreatePortfolioResponse(false, null, null, null,"Portfolio name already exists");
        } catch (IllegalArgumentException e) {
            // Handle invalid input data
            return new CreatePortfolioResponse(false, null, null, null,"Invalid input data: " + e.getMessage());
        } catch (Exception e) {
            // Catch any other exception and provide a generic error message
            return new CreatePortfolioResponse(false, null, null, null,"Failed to create portfolio: " + e.getMessage());
        }
    }

    public GetAllPortfoliosResponse getAllPortfolios(GetAllPortfoliosRequest request) {
        List<Portfolio> portfolios = portfolioRepository.findByUsername(request.getUsername());

        if (portfolios.isEmpty()) {
            return new GetAllPortfoliosResponse(false, "No portfolios found for this user", null);
            // Catch any other exception and provide a generic error message
            return new CreatePortfolioResponse(false, null, null, null,"Failed to create portfolio: " + e.getMessage());
        }

        List<PortfolioDto> portfolioDtos = portfolios.stream()
                .map(portfolio -> new PortfolioDto(portfolio.getId(), portfolio.getName(), portfolio.getName(), portfolio.getAmount()))
                .collect(Collectors.toList());

        return new GetAllPortfoliosResponse(true, "Portfolios retrieved successfully", portfolioDtos);
    }
    public UpdatePortfolioResponse updatePortfolio(UpdatePortfolioRequest request) {
        Portfolio portfolio = portfolioRepository.findById(request.getId()).orElse(null);

        if (portfolio == null) {
            return new UpdatePortfolioResponse(false, null, "Portfolio not found");
        }

        portfolio.setName(request.getName());
        portfolio.setAmount(request.getAmount());

        Portfolio updatedPortfolio = portfolioRepository.save(portfolio);
        return new UpdatePortfolioResponse(true, updatedPortfolio.getId(), "Portfolio updated successfully");
    }
}
