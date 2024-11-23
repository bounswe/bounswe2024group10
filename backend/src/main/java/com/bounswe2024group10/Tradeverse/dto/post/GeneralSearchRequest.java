package com.bounswe2024group10.Tradeverse.dto.post;

import java.util.HashSet;

public class GeneralSearchRequest {
    private String username;
    private String keyword;
    private String order;
    private HashSet<String> wantedItems;

    public GeneralSearchRequest(String username, String keyword, String order, HashSet<String> wantedItems) {
        this.username = username;
        this.keyword = keyword;
        this.order = order;
        this.wantedItems = wantedItems;
    }

    public String getUsername() {
        return username;
    }

    public String getKeyword() {
        return keyword;
    }

    public String getOrder() {
        return order;
    }

    public HashSet<String> getWantedItems() {
        return wantedItems;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public void setWantedItems(HashSet<String> wantedItems) {
        this.wantedItems = wantedItems;
    }
}
