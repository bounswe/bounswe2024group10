package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findByEmail(String email);

    List<User> findByUsernameContainingOrNameContainingOrBioContaining(String keyword1, String keyword2, String keyword3);
}
