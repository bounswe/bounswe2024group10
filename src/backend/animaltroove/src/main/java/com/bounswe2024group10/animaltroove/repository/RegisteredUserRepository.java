package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends CrudRepository<RegisteredUser, Integer> {
    @Query("SELECT R FROM RegisteredUser R WHERE R.userName = ?1 AND R.password = ?2")
    RegisteredUser findByUserNameAndPassword(String username, String password);
    @Query("SELECT R FROM RegisteredUser R WHERE R.userName = ?1")
    RegisteredUser findByUserName(String username);
    @Query("SELECT R FROM RegisteredUser R WHERE R.email = ?1")
    RegisteredUser findByEmail(String email);
}
