package com.bounswe2024group10.animaltroove.service;

// Our imports
import com.bounswe2024group10.animaltroove.dto.CommentRequest;
import com.bounswe2024group10.animaltroove.dto.CommentResponse;
import com.bounswe2024group10.animaltroove.model.Comment;
import com.bounswe2024group10.animaltroove.repository.CommentRepository;
import com.bounswe2024group10.animaltroove.dto.DeleteCommentRequest;
import com.bounswe2024group10.animaltroove.dto.DeleteCommentResponse;

// Springboot imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteCommentService {

    @Autowired
    private CommentRepository commentRepository;

    public DeleteCommentResponse deleteComment(DeleteCommentRequest request) {

        if (commentRepository.findByCommentID(request.getCommentID()) == null) {
            return new DeleteCommentResponse(false, "Comment does not exist!");
        }
        try {
            commentRepository.deleteById(request.getCommentID());
        } catch (IllegalArgumentException e) {
            return new DeleteCommentResponse(false, "Invalid comment id.");
        }
        return new DeleteCommentResponse(true, "Comment deleted.");

    }
}
