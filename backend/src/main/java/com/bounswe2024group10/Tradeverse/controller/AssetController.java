package com.bounswe2024group10.Tradeverse.controller;

import com.bounswe2024group10.Tradeverse.dto.asset.*;
import com.bounswe2024group10.Tradeverse.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bounswe2024group10.Tradeverse.model.Asset;
import java.util.List;

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
