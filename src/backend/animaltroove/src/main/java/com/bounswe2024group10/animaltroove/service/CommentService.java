package com.bounswe2024group10.animaltroove.service;

// Our imports
import com.bounswe2024group10.animaltroove.dto.CommentRequest;
import com.bounswe2024group10.animaltroove.dto.CommentResponse;
import com.bounswe2024group10.animaltroove.model.Comment;
import com.bounswe2024group10.animaltroove.repository.CommentRepository;
import com.bounswe2024group10.animaltroove.repository.RegisteredUserRepository;
// import com.bounswe2024group10.animaltroove.repository.PostRepository;

// Springboot imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    private RegisteredUserRepository registeredUserRepository;
    // private PostRepository postRepository;

    public CommentResponse commentPost(CommentRequest request) {

        if (registeredUserRepository.findByUserID(request.getUserID()) == null) {
            return new CommentResponse(false, "User does not exist!");
        }
        // if (postRepository.findByPostID(request.getPostID()) == null) {
        //    return new CommentResponse(false, "Post does not exist!"); 
        // }
        Comment commented = new Comment(request.getUserID(), request.getPostID(), request.getDescription());
        try {
            commentRepository.save(commented);
        } catch (IllegalArgumentException e) {
            return new CommentResponse(false, "Invalid comment data.");
        }
        return new CommentResponse(true, "Post commented.");

    }
}
