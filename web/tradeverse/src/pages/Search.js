import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mockData from "../data/mockData";
import './styles/Search.css'; // Import the CSS file

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('popular'); // Default to "popular"
  const [results, setResults] = useState([]);

  // Function to handle search
  const handleSearch = (term, category) => {
    const lowerTerm = term.toLowerCase();

    let filteredResults = [];
    switch (category) {
      case 'popular':
        filteredResults = [
          // Subforums first
          ...mockData.subforums
            .filter(subforum => subforum.name.toLowerCase().includes(lowerTerm))
            .map(subforum => ({ ...subforum, type: 'subforum' })),
          // Posts next
          ...mockData.subforums
            .flatMap(subforum =>
              subforum.posts.filter(post =>
                post.content.toLowerCase().includes(lowerTerm) ||
                post.description.toLowerCase().includes(lowerTerm)
              )
            )
            .map(post => ({ ...post, type: 'post' })),
          // Users after that
          ...mockData.allUsers
            .filter(user =>
              user.name.toLowerCase().includes(lowerTerm) ||
              user.surname.toLowerCase().includes(lowerTerm) ||
              user.username.toLowerCase().includes(lowerTerm)
            )
            .map(user => ({ ...user, type: 'user' })),
          // Tags last
          ...mockData.allTags
            .filter(tag => tag.label.toLowerCase().includes(lowerTerm))
            .map(tag => ({ ...tag, type: 'tag' })),
        ];
        break;

      case 'tags':
        filteredResults = mockData.allTags
          .filter(tag => tag.label.toLowerCase().includes(lowerTerm))
          .map(tag => ({ ...tag, type: 'tag' }));
        break;

      case 'subforums':
        filteredResults = mockData.subforums
          .filter(subforum => subforum.name.toLowerCase().includes(lowerTerm))
          .map(subforum => ({ ...subforum, type: 'subforum' }));
        break;

      case 'posts':
        filteredResults = mockData.subforums
          .flatMap(subforum =>
            subforum.posts.filter(post =>
              post.content.toLowerCase().includes(lowerTerm) ||
              post.description.toLowerCase().includes(lowerTerm)
            )
          )
          .map(post => ({ ...post, type: 'post' }));
        break;

      case 'users':
        filteredResults = mockData.allUsers
          .filter(user =>
            user.name.toLowerCase().includes(lowerTerm) ||
            user.surname.toLowerCase().includes(lowerTerm) ||
            user.username.toLowerCase().includes(lowerTerm)
          )
          .map(user => ({ ...user, type: 'user' }));
        break;

      default:
        filteredResults = [];
    }

    setResults(filteredResults);
  };

  // Handle input change
  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    handleSearch(term, searchCategory);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSearchCategory(category);
    handleSearch(searchTerm, category); // Perform search in the new category
  };

  return (
    <div className="container">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-bar"
      />

      {/* Category selector */}
      <div className="category-selector">
        {['popular', 'tags', 'subforums', 'posts', 'users'].map(category => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`category-button ${searchCategory === category ? 'active' : ''}`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search results */}
      <div className="results-container">
        {results.length === 0 ? (
          <p className="no-results">No results found.</p>
        ) : (
          results.map((result, index) => {
            switch (result.type) {
              case 'user':
                return (
                  <div key={index} className="user-card">
                    <img src={result.avatar} alt={result.name} className="user-avatar" />
                    <div>
                      <p className="user-name">
                        {result.name} {result.surname} (@{result.username})
                      </p>
                      <p className="user-followers">Followers: {result.followers}</p>
                    </div>
                  </div>
                );

              case 'tag':
                return (
                  <div key={index} className="tag-card">
                    <p className="tag-label">{result.label}</p>
                    <p className="tag-info">
                      Posts: {result.posts}, People: {result.people}
                    </p>
                  </div>
                );

              case 'subforum':
                return (
                  <div key={index} className="subforum-card">
                    <Link to={`/${result.name.toLowerCase()}`} className="subforum-link">
                      <h3>{result.name}</h3>
                    </Link>
                  </div>
                );

              case 'post':
                return (
                  <div key={index} className="post-card">
                    <Link to={`/${result.forumName.toLowerCase()}/${result.id}`} className="post-link">
                      <h4 className="post-username">{result.username}</h4>
                      <p className="post-content">{result.content}</p>
                    </Link>
                  </div>
                );

              default:
                return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Search;
