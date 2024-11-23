package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.asset.*;
import com.bounswe2024group10.Tradeverse.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/asset")
public class AssetController {
    @Autowired
    private AssetService assetService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/details")
    public ResponseEntity<GetAssetDetailsResponse> getAssetDetails(@RequestBody GetAssetDetailsRequest request) {
        GetAssetDetailsResponse response = assetService.getAssetDetails(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/chart")
    public ResponseEntity<GetAssetChartResponse> getAssetChart(@RequestBody GetAssetChartRequest request) {
        GetAssetChartResponse response = assetService.getAssetChart(request);
        return ResponseEntity.ok(response);
    }
}
