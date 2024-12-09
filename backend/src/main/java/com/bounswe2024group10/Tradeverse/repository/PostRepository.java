package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.extra.PostType;
import com.bounswe2024group10.Tradeverse.model.Post;
import com.bounswe2024group10.Tradeverse.dto.post.other.SubforumSummaryDTO;


@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByUsername(String username);

    List<Post> findByParentID(Long parentID);

    List<Post> findByTitle(String title);

    Long countByParentID(Long parentID);

    List<Post> findByPostType(PostType postType);

    @Query("SELECT p FROM Post p WHERE p.title LIKE %:keyword% ORDER BY p.lastEditDate DESC")
    List<Post> findByTitleContaining(@Param("keyword") String keyword, Pageable pageable);

    @Query("SELECT p FROM Post p WHERE p.id = :id")
    Optional<Post> findByIdForUpdate(@Param("id") Long id);

    @Query(value = "SELECT * FROM posts p WHERE p.post_type = :postType AND (p.title LIKE %:keyword% OR p.content LIKE %:keyword%) ORDER BY p.last_edit_date DESC", nativeQuery = true)
    List<Post> findByKeywordAndPostType(@Param("keyword") String keyword, @Param("postType") PostType postType);

    @Query("SELECT p FROM Post p WHERE p.postType = PostType.POST ORDER BY p.creationDate DESC")
    List<Post> findRecentPosts();

    @Query("SELECT p FROM Post p WHERE p.postType = PostType.POST ORDER BY p.lastUpdateDate DESC")
    List<Post> findPopularPosts();
    @Query("SELECT new com.bounswe2024group10.Tradeverse.dto.post.other.SubforumSummaryDTO(p.id, p.title, COUNT(child.id)) " +
            "FROM Post p LEFT JOIN Post child ON p.id = child.parentID " +
            "WHERE p.postType = :postType AND p.title LIKE %:keyword% " +
            "GROUP BY p.id, p.title")
    List<SubforumSummaryDTO> findSubforumsWithKeywordAndPostCount(@Param("keyword") String keyword, @Param("postType") PostType postType);
}
