package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.subforum.*;
import com.bounswe2024group10.Tradeverse.model.Subforum;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.SubforumRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubforumService {
    @Autowired
    private SubforumRepository subforumRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Subforum> getAllSubforums() {
        return subforumRepository.findAll();
    }

    public CreateSubforumResponse createSubforum(CreateSubforumRequest request, String username) {
        if (username == null) {
            return new CreateSubforumResponse(false, "User not found", null);
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new CreateSubforumResponse(false, "User not found", null);
        }
        Subforum subforum = new Subforum(
                request.getName(),
                request.getDescription(),
                request.getTagColor()
        );
        subforumRepository.save(subforum);
        return new CreateSubforumResponse(true, "Subforum created successfully", subforum.getId());
    }

    public DeleteSubforumResponse deleteSubforum(DeleteSubforumRequest request, String username) {
        if (username == null) {
            return new DeleteSubforumResponse(false, "User not found");
        }
        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new DeleteSubforumResponse(false, "User not found");
        }
        Optional<Subforum> subforum = subforumRepository.findById(request.getId());
        if (subforum.isEmpty()) {
            return new DeleteSubforumResponse(false, "Subforum not found");
        }
        subforumRepository.delete(subforum.get());
        return new DeleteSubforumResponse(true, "Subforum deleted successfully");
    }
}
