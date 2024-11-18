import React, { useState } from 'react';
import Feed from "../components/structure/feed";
import mockData from "../data/mockData";
import { Link } from 'react-router-dom';
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
          ...mockData.subforums.filter(subforum =>
            subforum.name.toLowerCase().includes(lowerTerm)
          ),
          ...mockData.allTags.filter(tag =>
            tag.label.toLowerCase().includes(lowerTerm)
          ),
          ...mockData.allUsers.filter(user =>
            user.name.toLowerCase().includes(lowerTerm) ||
            user.surname.toLowerCase().includes(lowerTerm) ||
            user.username.toLowerCase().includes(lowerTerm)
          ),
        ];
        break;

      case 'tags':
        filteredResults = mockData.allTags.filter(tag =>
          tag.label.toLowerCase().includes(lowerTerm)
        );
        break;

      case 'subforums':
        filteredResults = mockData.subforums.filter(subforum =>
          subforum.name.toLowerCase().includes(lowerTerm)
        );
        break;

      case 'posts':
        filteredResults = mockData.subforums.flatMap(subforum =>
          subforum.posts.filter(post =>
            post.content.toLowerCase().includes(lowerTerm) ||
            post.description.toLowerCase().includes(lowerTerm)
          )
        );
        break;

      case 'users':
        filteredResults = mockData.allUsers.filter(user =>
          user.name.toLowerCase().includes(lowerTerm) ||
          user.surname.toLowerCase().includes(lowerTerm) ||
          user.username.toLowerCase().includes(lowerTerm)
        );
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
            if (searchCategory === 'users') {
              // Render user results
              return (
                <div key={index} className="user-card">
                  <img
                    src={result.avatar}
                    alt={result.name}
                    className="user-avatar"
                  />
                  <div>
                    <p className="user-name">
                      {result.name} {result.surname} (@{result.username})
                    </p>
                    <p className="user-followers">Followers: {result.followers}</p>
                  </div>
                </div>
              );
            } else if (searchCategory === 'tags') {
              // Render tag results
              return (
                <div key={index} className="tag-card">
                  <p className="tag-label">{result.label}</p>
                  <p className="tag-info">
                    Posts: {result.posts}, People: {result.people}
                  </p>
                </div>
              );
            } else if (searchCategory === 'subforums') {
              // Render subforum results
              return (
                <div key={index} className="subforum-card">
                  <Link to={`/${result.name.toLowerCase()}`} className="subforum-link">
                    <h3>{result.name}</h3>
                  </Link>
                </div>
              );
            } else if (searchCategory === 'posts') {
              // Render post results
              return (
                <div key={index} className="post-card">
                  <Link to={`/${result.forumName.toLowerCase()}/${result.id}`} className="postLink">
                  <h4 className="post-username">{result.username}</h4>
                  <p className="post-content">{result.content}</p>
                  </Link>
                </div>
              );
            } else {
              // Render general results (for popular)
              return <div key={index}><p>{JSON.stringify(result)}</p></div>;
            }
          })
        )}
      </div>
    </div>
  );
};

export default Search;
