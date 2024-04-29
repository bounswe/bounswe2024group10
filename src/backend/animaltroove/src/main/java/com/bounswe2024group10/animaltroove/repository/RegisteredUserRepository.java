package com.bounswe2024group10.animaltroove.repository;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends CrudRepository<RegisteredUser, Integer> {
    RegisteredUser findByUserNameAndPassword(String username, String password);
    RegisteredUser findByUserName(String username);
    RegisteredUser findByEmail(String email);
}