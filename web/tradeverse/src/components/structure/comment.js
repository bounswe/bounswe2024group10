import React, { useState } from "react";
import styles from "../styles/comment.module.css";
import { AuthData } from "../../auth/AuthWrapper";
import { createComment, deleteComment } from "../../services/post";
import { createAnnotation } from "../../services/annotation";
import { toast } from "react-toastify";

const Comment = ({ comment, level, onDeleteComment, selectedAnnotation}) => {
    const { user } = AuthData();
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [nestedReplies, setNestedReplies] = useState(comment.replies || []); // Local state for nested replies

    const [selectedText, setSelectedText] = useState(""); // Selected text
    const [annotationContent, setAnnotationContent] = useState(""); // Annotation content
    const [selectionRange, setSelectionRange] = useState(null); // Text selection range
    const [showAnnotationInput, setShowAnnotationInput] = useState(false); // To toggle annotation input
    const [floatingPosition, setFloatingPosition] = useState({ top: 0, left: 0 }); // Position for the floating UI

    const handleReplyToggle = () => {
        setShowReplyBox(!showReplyBox);
    };

    const parseContent = (content) => {
        const parts = content.split(/(@\w+)/); // Split by '@' followed by a word
        return parts
            .filter((part) => part.trim() !== "")
            .map((part) => {
                if (part.startsWith("@")) {
                    return { type: "tag", value: part };
                }
                return { type: "text", value: part };
            });
    };

    const handleReplySubmit = async () => {
        if (!replyText.trim()) return;

        const commentPayload = {
            content: parseContent(replyText),
            postID: comment.postID, // Use the postID from the comment
            parentCommentID: comment.id, // The current comment's ID as the parent
        };

        try {
            const token = localStorage.getItem("authToken");
            const response = await createComment(commentPayload, token); // Add reply via API

            if (response && response.isSuccessful) {
                const newReply = {
                    id: response.id, // Use the ID returned by the API
                    content: commentPayload.content,
                    createdBy: user.name,
                    creationDate: new Date().toISOString(), // Approximate creation date
                    replies: [], // New comments initially have no replies
                    postID: comment.postID,
                    parentCommentID: comment.id,
                };

                setReplyText(""); // Clear the input field
                setShowReplyBox(false); // Hide reply box
                setNestedReplies((prevReplies) => [...prevReplies, newReply]); // Add the new reply locally
            } else {
                alert("Failed to add reply.");
            }
        } catch (error) {
            console.error("Error adding reply:", error);
            alert("Error adding reply.");
        }
    };

    const handleDelete = async () => {
        if (!user.isAuthenticated) {
            alert("Please log in to delete this comment.");
            return;
        }

        try {
            const token = localStorage.getItem("authToken");
            const commentPayload = { commentId: comment.id }; // Payload with the comment ID
            const response = await deleteComment(commentPayload, token); // Call deleteComment API

            if (response && response.isSuccessful) {
                alert("Comment deleted successfully.");
                onDeleteComment(comment.id); // Notify parent to remove this comment
            } else {
                alert("Failed to delete comment.");
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
            alert("Error deleting comment.");
        }
    };

    const handleTextSelection = () => {
        const selection = window.getSelection();
        const text = selection.toString().trim();

        if (text) {
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            setSelectedText(text);
            setSelectionRange({ start: range.startOffset, end: range.endOffset });
            setFloatingPosition({ top: rect.bottom + window.scrollY, left: rect.right + window.scrollX });
            setShowAnnotationInput(false); // Reset annotation input visibility
        } else {
            setSelectedText("");
            setSelectionRange(null);
        }
    };

    const handleAnnotationSubmit = async () => {
        if (!annotationContent.trim()) {
            toast.error("Annotation content cannot be empty.");
            return;
        }

        if (!selectionRange) {
            toast.error("Please select text to annotate.");
            return;
        }

        const annotationPayload = {
            type: "Annotation",
            creator: user.name,
            body: {
                type: "TextualBody",
                value: annotationContent,
            },
            target: {
                type: "SpecificResource",
                source: window.location.href,
                postId: null,
                commentId: comment.id,
                selector: {
                    type: "TextPositionSelector",
                    start: selectionRange.start,
                    end: selectionRange.end,
                },
            },
        };

        try {
            const response = await createAnnotation(annotationPayload);
            if (response) {
                toast.success("Annotation created successfully.");
                setAnnotationContent("");
                setSelectedText("");
                setSelectionRange(null);
                setShowAnnotationInput(false);
            }
        } catch (error) {
            console.error("Error creating annotation:", error);
            toast.error("Error creating annotation.");
        }
    };

    const createCommentContent = (content) => {
        if (!content || !Array.isArray(content)) return "No content available";

        return content.map((item, index) => {
            if (item.type === "text") {
                return <span key={index}>{item.value} </span>;
            }
            if (item.type === "tag") {
                return (
                    <span key={index} style={{ color: "blue" }}>
                        {item.value}{" "}
                    </span>
                );
            }
            return null;
        });
    };

    const highlightCommentContent = (content) => {
        if (
            !selectedAnnotation ||
            !selectedAnnotation.target.selector ||
            selectedAnnotation.target.commentId !== comment.id
        ) {
            return createCommentContent(content);
        }

        const { start, end } = selectedAnnotation.target.selector;
        const textContent = content.map((item) => item.value).join(""); // Flatten content into plain text
        const before = textContent.slice(0, start);
        const highlighted = textContent.slice(start, end);
        const after = textContent.slice(end);

        return (
            <>
                {before}
                <span className={styles.highlighted}>{highlighted}</span>
                {after}
            </>
        );
    };

    return (
        <div className={styles.comment} style={{ marginLeft: `${level * 20}px` }} onMouseUp={handleTextSelection}>
            <div className={styles.commentHeader}>
                <h5>{comment.createdBy || "Anonymous"}</h5>
                <span>{new Date(comment.creationDate).toLocaleString()}</span>
                {user.isAuthenticated && comment.createdBy === user.name && (
                    <button
                        className={styles.deleteButton}
                        onClick={handleDelete}
                        title="Delete comment"
                    >
                        🗑️
                    </button>
                )}
            </div>
            <p className={styles.commentText}>{highlightCommentContent(comment.content)}</p>
            {selectedText && user.isAuthenticated && (
                <>
                    {/* Small symbol */}
                    <div
                        className={styles.annotationSymbol}
                        style={{ top: floatingPosition.top, left: floatingPosition.left }}
                    >
                        <button onClick={() => { setShowAnnotationInput(true); }}>
                            🖋
                        </button>

                    </div>
                    {showAnnotationInput && (
                        <div
                            className={styles.annotationInputContainer}
                            style={{
                                position: "absolute",
                                top: floatingPosition.top + 20,
                                left: floatingPosition.left - 150,
                            }}
                            onMouseUp={(e) => e.stopPropagation()}
                        >
                            <textarea
                                placeholder="Write your annotation..."
                                value={annotationContent}
                                onChange={(e) => setAnnotationContent(e.target.value)}
                                className={styles.annotationInput}
                            />
                            <button onClick={handleAnnotationSubmit} className={styles.annotationButton}>
                                Submit
                            </button>
                        </div>
                    )}
                </>
            )}
            {user.isAuthenticated && (
                <button onClick={handleReplyToggle} className={styles.replyButton}>
                    {showReplyBox ? "Cancel" : "Reply"}
                </button>
            )}

            {showReplyBox && (
                <div className={styles.replyBox}>
                    <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply..."
                        className={styles.replyInput}
                    />
                    <button onClick={handleReplySubmit} className={styles.submitReplyButton}>
                        Submit
                    </button>
                </div>
            )}

            {/* Render nested replies */}
            {nestedReplies.length > 0 && (
                <div className={styles.nestedComments}>
                    {nestedReplies.map((nestedComment) => (
                        <Comment
                            key={nestedComment.id}
                            comment={nestedComment}
                            level={level + 1}
                            onDeleteComment={(childId) => {
                                setNestedReplies((prevReplies) =>
                                    prevReplies.filter((reply) => reply.id !== childId)
                                );
                            }}
                            selectedAnnotation={selectedAnnotation}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Comment;
