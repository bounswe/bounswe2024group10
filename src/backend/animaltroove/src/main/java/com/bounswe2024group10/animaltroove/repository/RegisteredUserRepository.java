package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Integer> {
    RegisteredUser findByUserNameAndPassword(String userName, String password);
}