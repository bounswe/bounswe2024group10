import React, { useState } from "react";
import Post from "../components/structure/Post";
import mockData from "../data/mockData";
import "./styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faClock } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom"; // Import useParams

const Subforum = () => {
    const { name } = useParams(); // Get the forumName from the URL
    const [activeButton, setActiveButton] = useState("new");
    const [posts, setPosts] = useState(mockData.subforums.filter(subforum => subforum.name === name).flatMap(subforum => subforum.posts));
    const [userActions, setUserActions] = useState({}); // To track user actions on posts (like/dislike)

    // Function to handle sorting posts
    const sortPosts = (criteria) => {
        let sorted = [...posts];

        if (criteria === "new") {
            sorted.sort((a, b) => new Date(`${b.date} ${b.time}`) - new Date(`${a.date} ${a.time}`));
        } else if (criteria === "hottest") {
            sorted.sort((a, b) => (b.likeCount + b.dislikeCount + b.commentCount) - (a.likeCount + a.dislikeCount + a.commentCount));
        }

        setPosts(sorted);
        setActiveButton(criteria);
    };

    // Like function (with unlike feature)
    const handleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    const userAction = userActions[postId];

                    let newLikeCount = post.likeCount;
                    let newDislikeCount = post.dislikeCount;

                    // If the user has already liked the post, remove the like
                    if (userAction?.liked) {
                        newLikeCount -= 1;
                        setUserActions({
                            ...userActions,
                            [postId]: { liked: false, disliked: false },
                        });
                    } else {
                        newLikeCount += 1;
                        // If the user had disliked the post before, remove the dislike
                        if (userAction?.disliked) {
                            newDislikeCount -= 1;
                        }
                        setUserActions({
                            ...userActions,
                            [postId]: { liked: true, disliked: false },
                        });
                    }

                    return { ...post, likeCount: newLikeCount, dislikeCount: newDislikeCount };
                }
                return post;
            })
        );
    };

    // Dislike function (with undislike feature)
    const handleDislike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    const userAction = userActions[postId];

                    let newDislikeCount = post.dislikeCount;
                    let newLikeCount = post.likeCount;

                    // If the user has already disliked the post, remove the dislike
                    if (userAction?.disliked) {
                        newDislikeCount -= 1;
                        setUserActions({
                            ...userActions,
                            [postId]: { liked: false, disliked: false },
                        });
                    } else {
                        newDislikeCount += 1;
                        // If the user had liked the post before, remove the like
                        if (userAction?.liked) {
                            newLikeCount -= 1;
                        }
                        setUserActions({
                            ...userActions,
                            [postId]: { liked: false, disliked: true },
                        });
                    }

                    return { ...post, likeCount: newLikeCount, dislikeCount: newDislikeCount };
                }
                return post;
            })
        );
    };

    return (
        <div className="homePage">
            <div className="sort-buttons">
                <button
                    className={`sort-button ${activeButton === "new" ? "active" : ""}`}
                    onClick={() => sortPosts("new")}
                >
                    <FontAwesomeIcon icon={faClock} /> New
                </button>
                <button
                    className={`sort-button ${activeButton === "hottest" ? "active" : ""}`}
                    onClick={() => sortPosts("hottest")}
                >
                    <FontAwesomeIcon icon={faFire} /> Hottest
                </button>
            </div>
            <div className="posts">
                {posts.map(post => (
                    <Post 
                        key={post.id} 
                        post={post} 
                        onLike={handleLike} 
                        onDislike={handleDislike} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Subforum;
