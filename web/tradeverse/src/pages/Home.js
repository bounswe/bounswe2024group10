import React, { useState, useEffect } from "react";
import Feed from "../components/structure/feed";
import mockData from "../data/mockData";
import "./styles/Home.css";
import { useParams } from "react-router-dom";

const Home = () => {
    const { name } = useParams();
    const [posts, setPosts] = useState(mockData.subforums.flatMap(subforum => subforum.posts));

    useEffect(() => {
        if (name) {
            const filteredPosts = mockData.subforums
                .filter(subforum => subforum.name.toLowerCase() === name.toLowerCase())
                .flatMap(subforum => subforum.posts);
            setPosts(filteredPosts);
        } else {
            setPosts(mockData.subforums.flatMap(subforum => subforum.posts));
        }
    }, [name]);

    console.log(name)


    return (
        <div className="homePage">
            <div className="feedContainer">
                <Feed posts={posts} name={name}/>
            </div>
        </div>
    );
};

export default Home;
