package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumRequest;
import com.bounswe2024group10.Tradeverse.dto.subforum.CreateSubforumResponse;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubforumService {
    @Autowired
    private SubforumRepository subforumRepository;

    public List<Subforum> getAllSubforums() {
        return subforumRepository.findAll();
    }

    public CreateSubforumResponse createSubforum(CreateSubforumRequest request) {
        Subforum subforum = new Subforum(
                request.getName(),
                request.getDescription(),
                request.getTagColor()
        );

        Subforum savedSubforum = subforumRepository.save(subforum);
        return new CreateSubforumResponse(
                savedSubforum.getId(),
                savedSubforum.getName(),
                savedSubforum.getDescription(),
                savedSubforum.getTagColor()
        );
    }

    public void deleteSubforum(Long id) {
        subforumRepository.deleteById(id);
    }
}