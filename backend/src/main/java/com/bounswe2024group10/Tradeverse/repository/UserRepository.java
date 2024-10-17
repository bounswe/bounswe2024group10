package com.bounswe2024group10.Tradeverse.repository;

import com.bounswe2024group10.Tradeverse.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
