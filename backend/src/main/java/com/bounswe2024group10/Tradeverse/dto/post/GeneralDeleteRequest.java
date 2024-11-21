package com.bounswe2024group10.Tradeverse.dto.post;

public class GeneralDeleteRequest {
        
        private String username;
        private Long postId;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }
    
        public Long getPostId() {
            return postId;
        }
    
        public void setPostId(Long postId) {
            this.postId = postId;
        }
    
}
