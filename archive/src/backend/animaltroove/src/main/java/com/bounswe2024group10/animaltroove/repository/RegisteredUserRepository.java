package com.bounswe2024group10.animaltroove.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends CrudRepository<RegisteredUser, Integer> {
    RegisteredUser findByUserNameAndPassword(String username, String password);
    RegisteredUser findByUserName(String username);
    List<RegisteredUser> findByUserNameContaining(String keyword);
    RegisteredUser findByEmail(String email);
}
