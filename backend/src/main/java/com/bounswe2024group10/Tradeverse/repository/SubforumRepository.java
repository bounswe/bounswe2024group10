package com.bounswe2024group10.Tradeverse.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bounswe2024group10.Tradeverse.model.Subforum;

@Repository
public interface SubforumRepository extends JpaRepository<Subforum, Long> {

    List<Subforum> findByNameContaining(String keyword);

    List<Subforum> findByDescriptionContaining(String keyword);

    List<Subforum> findByNameContainingOrDescriptionContaining(String keyword1, String keyword2);
}
