import React, {useEffect, useState} from 'react';
import PostHeader from './postHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you are using FontAwesome
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons'; 
import "../styles/feed.css"


const Feed = ({ posts, name}) => {

    const [sortedPosts, setSortedPosts] = useState([]);
    const [activeSort, setActiveSort] = useState("new");


    const sortPosts = (type) => {
        let sortedArray;
        if (type === "new") {
            sortedArray = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (type === "hot") {
            sortedArray = [...posts].sort((a, b) => b.likeCount - a.likeCount);
        }
        setSortedPosts(sortedArray);
        setActiveSort(type);
    };

    useEffect(() => {
        sortPosts(activeSort);
      }, [posts, activeSort]);

    return (
        <div className="feed">
            <div className='headerButton'>
                <h2>
                    {name ? `${name.toUpperCase()} Posts` : activeSort === "new" ? "Latest Posts" : "Trending Posts"}
                </h2>
                
                <div className="sortButtons">
                    <button
                        className={`sortButton ${activeSort === "new" ? "active" : ""}`}
                        onClick={() => sortPosts("new")}
                    >
                        <FontAwesomeIcon icon={faClock} /> New
                    </button>
                    <button
                        className={`sortButton ${activeSort === "hot" ? "active" : ""}`}
                        onClick={() => sortPosts("hot")}
                    >
                        <FontAwesomeIcon icon={faFire} /> Hot
                    </button>
                </div>
            </div>
            <hr></hr>
            <div className="post-headers">
                {sortedPosts.map(post => (
                    <PostHeader 
                        key={post.id} 
                        post={post}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feed;
