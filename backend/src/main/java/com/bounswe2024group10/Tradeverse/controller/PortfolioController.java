package com.bounswe2024group10.Tradeverse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.portfolio.AddAssetToPortfolioRequest;
import com.bounswe2024group10.Tradeverse.dto.portfolio.AddAssetToPortfolioResponse;
import com.bounswe2024group10.Tradeverse.dto.portfolio.GetPortfolioResponse;
import com.bounswe2024group10.Tradeverse.service.PortfolioService;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-portfolio")
    public GetPortfolioResponse getPortfolio(@RequestParam String username) {
        return portfolioService.getPortfolio(username);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/add-asset")
    public ResponseEntity<AddAssetToPortfolioResponse> addAssetToPortfolio(@RequestBody AddAssetToPortfolioRequest request) {
        AddAssetToPortfolioResponse response = portfolioService.addAssetToPortfolio(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/by-asset")
    public GetPortfolioResponse getPortfoliosByAsset(@RequestParam Long assetId) {
        return portfolioService.getPortfoliosByAsset(assetId);
    }
}
