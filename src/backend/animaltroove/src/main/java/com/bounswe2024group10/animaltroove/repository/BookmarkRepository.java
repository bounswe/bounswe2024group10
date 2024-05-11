package com.bounswe2024group10.animaltroove.repository;

import org.springframework.data.jpa.repository.Query;
import com.bounswe2024group10.animaltroove.model.Bookmarked;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarkRepository extends CrudRepository<Bookmarked, Integer> {
    
    @Query("SELECT b FROM Bookmarked b WHERE b.userID = :registeredUserID AND b.postID = :postID")
    Bookmarked findByRegisteredUserIDandPostID(int registeredUserID, Long postID);

    @Query("SELECT b FROM Bookmarked b WHERE b.userID = :registeredUserID")
    Bookmarked findByRegisteredUserID(int registeredUserID);
}
