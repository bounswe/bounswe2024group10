package com.bounswe2024group10.Tradeverse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bounswe2024group10.Tradeverse.dto.asset.AddAssetRequest;
import com.bounswe2024group10.Tradeverse.dto.asset.AddAssetResponse;
import com.bounswe2024group10.Tradeverse.dto.asset.GetAssetChartRequest;
import com.bounswe2024group10.Tradeverse.dto.asset.GetAssetChartResponse;
import com.bounswe2024group10.Tradeverse.dto.asset.GetAssetDetailsRequest;
import com.bounswe2024group10.Tradeverse.dto.asset.GetAssetDetailsResponse;
import com.bounswe2024group10.Tradeverse.model.Asset;
import com.bounswe2024group10.Tradeverse.service.AssetService;

@RestController
@RequestMapping("/api/asset")
public class AssetController {

    @Autowired
    private AssetService assetService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/details")
    public ResponseEntity<GetAssetDetailsResponse> getAssetDetails(@RequestParam String symbol) {
        GetAssetDetailsRequest request = new GetAssetDetailsRequest();
        request.setSymbol(symbol);
        GetAssetDetailsResponse response = assetService.getAssetDetails(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/chart")
    public ResponseEntity<GetAssetChartResponse> getAssetChart(@RequestBody GetAssetChartRequest request) {
        GetAssetChartResponse response = assetService.getAssetChart(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/add")
    public ResponseEntity<AddAssetResponse> addAsset(@RequestBody AddAssetRequest request) {
        AddAssetResponse response = assetService.addAsset(request);
        return ResponseEntity.ok(response);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/all")
    public ResponseEntity<List<Asset>> getAllAssets() {
        List<Asset> assets = assetService.getAllAssets();
        return ResponseEntity.ok(assets);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<Asset> getAssetById(@PathVariable Long id) {
        Asset asset = assetService.getAssetById(id);
        return ResponseEntity.ok(asset);
    }
}
