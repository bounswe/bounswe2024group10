package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.portfolio.*;
import com.bounswe2024group10.Tradeverse.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/create")
    public ResponseEntity<CreatePortfolioResponse> createPortfolio(@RequestBody CreatePortfolioRequest request) {
        CreatePortfolioResponse response = portfolioService.createPortfolio(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/get-portfolio")
    public ResponseEntity<GetAllPortfoliosResponse> getAllPortfolios(@RequestBody GetAllPortfoliosRequest request) {
        GetAllPortfoliosResponse response = portfolioService.getAllPortfolios(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/update")
    public ResponseEntity<UpdatePortfolioResponse> updatePortfolio(@RequestBody UpdatePortfolioRequest request) {
        UpdatePortfolioResponse response = portfolioService.updatePortfolio(request);
        return ResponseEntity.ok(response);
    }
}
