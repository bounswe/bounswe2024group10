import React, { useState } from 'react';
import Feed from "../components/structure/feed";
import mockData from "../data/mockData";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSubforums, setFilteredSubforums] = useState(mockData.subforums);

    // Filter function to find matching subforums
    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
    
        // Filter posts within each subforum based on the search term in name, description, or tags
        const newFilteredSubforums = mockData.subforums.map((subforum) => {
            const filteredPosts = subforum.posts.filter((post) =>
                (post.name && post.name.toLowerCase().includes(term)) ||
                (post.description && post.description.toLowerCase().includes(term)) ||
                (post.tags && post.tags.some(tag => tag && tag.toLowerCase().includes(term)))
            );
    
            // Return subforums only if they have matching posts
            return { ...subforum, posts: filteredPosts };
        }).filter(subforum => subforum.posts.length > 0);
    
        setFilteredSubforums(newFilteredSubforums);
    };
    

    return (
        <div>
            <input
                type="text"
                placeholder="Search for subforums or posts..."
                value={searchTerm}
                onChange={handleSearch}
                style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
            />

            {/* Render Feed component for each filtered subforum */}
            {filteredSubforums.map((subforum) => (
                <Feed key={subforum.id} posts={subforum.posts} name={subforum.name} />
            ))}

            {/* If no results, show a message */}
            {filteredSubforums.length === 0 && (
                <p>No results found for "{searchTerm}"</p>
            )}
        </div>
    );
};

export default Search;
