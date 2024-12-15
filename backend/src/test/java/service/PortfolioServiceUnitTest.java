package service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.web.client.RestTemplate;

import com.bounswe2024group10.Tradeverse.dto.portfolio.AddAssetToPortfolioResponse;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import com.bounswe2024group10.Tradeverse.repository.PortfolioRepository;
import com.bounswe2024group10.Tradeverse.service.PortfolioService;

public class PortfolioServiceUnitTest {

    @InjectMocks
    private PortfolioService portfolioService;

    @Mock
    private PortfolioRepository portfolioRepository;

    @Mock
    private AssetRepository assetRepository;

    @Mock
    private RestTemplate restTemplate;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAddAssetToPortfolio_AssetNotFound() {
        when(assetRepository.existsById(2L)).thenReturn(false);
        AddAssetToPortfolioResponse result = portfolioService.addAssetToPortfolio(2L, 100, "testuser");
        assertFalse(result.isSuccessful());
        assertEquals("Asset not found", result.getMessage());
    }

    @Test
    public void testAddAssetToPortfolio_AssetFound() {
        when(assetRepository.existsById(1L)).thenReturn(true);
        AddAssetToPortfolioResponse result = portfolioService.addAssetToPortfolio(1L, 100, "testuser");
        assertTrue(result.isSuccessful());
        assertEquals("Asset found", result.getMessage());
    }

}
