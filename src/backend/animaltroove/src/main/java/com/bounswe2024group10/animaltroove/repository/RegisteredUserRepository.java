package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Integer> {
    @Query("SELECT R FROM RegisteredUser R WHERE R.userName = ?1 AND R.password = ?2")
    RegisteredUser findByUserNameAndPassword(String userName, String password);
}
