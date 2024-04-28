package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // Additional custom queries can be defined here
}