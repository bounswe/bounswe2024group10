package com.bounswe2024group10.Tradeverse.dto.post.other;

public class SubforumSummaryDTO { // Correct class name
    private Long id;
    private String title;
    private Long postCount;

    // Constructor with matching name
    public SubforumSummaryDTO(Long id, String title, Long postCount) {
        this.id = id;
        this.title = title;
        this.postCount = postCount;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Long getPostCount() {
        return postCount;
    }
}
