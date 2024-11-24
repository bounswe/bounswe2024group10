package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.*;

@Entity
@Table(name = "assets")
public class Asset {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String yahooFinanceSymbol;

    @Column(nullable = false)
    private String tradingViewSymbol;

    public Asset() {}

    public Asset(String name, String yahooFinanceSymbol, String tradingViewSymbol) {
        this.name = name;
        this.yahooFinanceSymbol = yahooFinanceSymbol;
        this.tradingViewSymbol = tradingViewSymbol;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getYahooFinanceSymbol() {
        return yahooFinanceSymbol;
    }

    public String getTradingViewSymbol() {
        return tradingViewSymbol;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setYahooFinanceSymbol(String yahooFinanceSymbol) {
        this.yahooFinanceSymbol = yahooFinanceSymbol;
    }

    public void setTradingViewSymbol(String tradingViewSymbol) {
        this.tradingViewSymbol = tradingViewSymbol;
    }
}
