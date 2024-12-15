//package com.bounswe2024group10.Tradeverse.service;
package service;
import com.bounswe2024group10.Tradeverse.dto.portfolio.*;
import com.bounswe2024group10.Tradeverse.model.Portfolio;
import com.bounswe2024group10.Tradeverse.repository.PortfolioRepository;
import com.bounswe2024group10.Tradeverse.service.PortfolioService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import org.mockito.MockitoAnnotations;
import java.math.BigDecimal;
import java.util.List;
import static org.mockito.Mockito.any;

import static org.junit.jupiter.api.Assertions.*;

public class PortfolioServiceTests {

    @Mock
    private PortfolioRepository portfolioRepository;

    @InjectMocks
    private PortfolioService portfolioService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreatePortfolioSuccess() {
        // Given
        CreatePortfolioRequest request = new CreatePortfolioRequest();
        request.setUsername("user1");
        request.setName("Portfolio 1");
        request.setAmount(BigDecimal.valueOf(1000));

        Portfolio portfolio = new Portfolio("user1", "Portfolio 1", BigDecimal.valueOf(1000));
        when(portfolioRepository.existsByUsernameAndName(request.getUsername(), request.getName())).thenReturn(false);
        when(portfolioRepository.save(any(Portfolio.class))).thenReturn(portfolio); // Use 'any' to match any Portfolio object

        // When
        CreatePortfolioResponse response = portfolioService.createPortfolio(request);

        // Then
        assertTrue(response.isSuccessful()); // Verify the success flag
        assertEquals("Portfolio created successfully", response.getMessage()); // Verify the message
        assertEquals("Portfolio 1", response.getName()); // Verify the name
        verify(portfolioRepository).save(any(Portfolio.class)); // Ensure save was called
    }


    @Test
    public void testCreatePortfolioAlreadyExists() {
        // Given
        CreatePortfolioRequest request = new CreatePortfolioRequest();
        request.setUsername("user1");
        request.setName("Portfolio 1");
        request.setAmount(BigDecimal.valueOf(1000));

        when(portfolioRepository.existsByUsernameAndName(request.getUsername(), request.getName())).thenReturn(true);

        // When
        CreatePortfolioResponse response = portfolioService.createPortfolio(request);

        // Then
        assertFalse(response.isSuccessful());
        assertEquals("A portfolio with this username already exists", response.getMessage());
        verify(portfolioRepository).existsByUsernameAndName(request.getUsername(), request.getName());
    }

    @Test
    public void testGetAllPortfoliosSuccess() {
        // Given
        GetAllPortfoliosRequest request = new GetAllPortfoliosRequest();
        request.setUsername("user1");

        Portfolio portfolio1 = new Portfolio("user1", "Portfolio 1", BigDecimal.valueOf(1000));
        Portfolio portfolio2 = new Portfolio("user1", "Portfolio 2", BigDecimal.valueOf(2000));
        when(portfolioRepository.findByUsername(request.getUsername())).thenReturn(List.of(portfolio1, portfolio2));

        // When
        GetAllPortfoliosResponse response = portfolioService.getAllPortfolios(request);

        // Then
        assertTrue(response.getIsSuccessful());
        assertEquals("Portfolios retrieved successfully", response.getMessage());
        assertEquals(2, response.getPortfolios().size());
    }

    @Test
    public void testGetAllPortfoliosNoData() {
        // Given
        GetAllPortfoliosRequest request = new GetAllPortfoliosRequest();
        request.setUsername("user1");

        when(portfolioRepository.findByUsername(request.getUsername())).thenReturn(List.of());

        // When
        GetAllPortfoliosResponse response = portfolioService.getAllPortfolios(request);

        // Then
        assertFalse(response.getIsSuccessful());
        assertEquals("No portfolios found for this user", response.getMessage());
    }

    @Test
    public void testUpdatePortfolioSuccess() {
        // Given
        UpdatePortfolioRequest request = new UpdatePortfolioRequest();
        request.setUsername("user1");
        request.setName("Portfolio 1");
        request.setAmount(BigDecimal.valueOf(2000));

        Portfolio portfolio = new Portfolio("user1", "Portfolio 1", BigDecimal.valueOf(1000));
        when(portfolioRepository.findByUsernameAndName(request.getUsername(), request.getName())).thenReturn(portfolio);
        when(portfolioRepository.save(portfolio)).thenReturn(portfolio);

        // When
        UpdatePortfolioResponse response = portfolioService.updatePortfolio(request);

        // Then
        assertTrue(response.getIsSuccessful());
        assertEquals("Portfolio updated successfully", response.getMessage());
        assertEquals(BigDecimal.valueOf(2000), portfolio.getAmount());
        verify(portfolioRepository).save(portfolio);
    }

    @Test
    public void testUpdatePortfolioNotFound() {
        // Given
        UpdatePortfolioRequest request = new UpdatePortfolioRequest();
        request.setUsername("user1");
        request.setName("NonExistentPortfolio");
        request.setAmount(BigDecimal.valueOf(1000));

        when(portfolioRepository.findByUsernameAndName(request.getUsername(), request.getName())).thenReturn(null);

        // When
        UpdatePortfolioResponse response = portfolioService.updatePortfolio(request);

        // Then
        assertFalse(response.getIsSuccessful());
        assertEquals("Portfolio not found", response.getMessage());
    }
}
