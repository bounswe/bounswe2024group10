import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Search.module.css'; // Import the CSS file
import { searchSubforums, searchPosts, searchTags, searchUsers, searchAssets } from '../services/search';
import PostHeader from '../components/structure/postHeader';
import defaultUserImage from '../data/defaultUserImage.jpeg';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('asset'); // Default to "popular"
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle search
  const handleSearch = async (term, category) => {
    const lowerTerm = term.toLowerCase();

    let filteredResults = [];
    setLoading(true);

    try {
      switch (category) {
        case 'tags':
          const tags = await searchTags(lowerTerm);
          filteredResults = tags.map((tag) => ({
            label: tag,
            type: 'tag',
          }));
          break;

        case 'subforums':
          filteredResults = await searchSubforums(lowerTerm);
          filteredResults = filteredResults.map((subforum) => ({
            id: subforum.id,
            name: subforum.name,
            type: 'subforum',
          }));
          break;

        case 'posts':
          filteredResults = await searchPosts(lowerTerm);
          filteredResults = filteredResults.map((post) => ({
            ...post,
            type: 'post',
          }));
          break;

        case 'users':
          filteredResults = await searchUsers(lowerTerm);
          
          filteredResults = filteredResults.map((user) => ({
            id: user.id,
            name: user.firstName,
            surname: user.lastName,
            username: user.username,
            avatar: user.userPhoto,
            followers: user.followerCount,
            type: 'user',
          }));
          break;

        case 'asset':
          const assets = await searchAssets(lowerTerm);
          filteredResults = assets.map((asset) => ({
            id: asset.id,
            name: asset.name,
            yahooFinanceSymbol: asset.yahooFinanceSymbol,
            tradingViewSymbol: asset.tradingViewSymbol,
            imageUrl: asset.imageUrl,
            type: 'asset',
          }));
          break;

        default:
          filteredResults = [];
      }
    } catch (error) {
      console.error(`Error searching ${category}:`, error);
    } finally {
      setLoading(false);
      setResults(filteredResults);
    }
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

  useEffect(() => {
    handleSearch(searchTerm, searchCategory);
  }, []);

  return (
    <div className={styles.container}>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.searchBar}
      />

      {/* Category selector */}
      <div className={styles.categorySelector}>
        {['asset', 'tags', 'subforums', 'posts', 'users'].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`${styles.categoryButton} ${
              searchCategory === category ? styles.active : ''
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search results */}
      <div className={styles.resultsContainer}>
        {loading ? (
          <p className={styles.loading}>Loading...</p>
        ) : results.length === 0 ? (
          <p className={styles.noResults}>No results found.</p>
        ) : (
          results.map((result, index) => {
            switch (result.type) {
              case 'user':
                return (
                  <Link to={`/user/${result.username}`} key={index} style={{ textDecoration: 'none',color: 'black' }}>
                  <div key={index} className={styles.userCard}>
                    
                    <img
                      src={result.avatar ? `http://35.246.188.121:8080/api${result.avatar}`: defaultUserImage}
                      alt={result.name}
                      className={styles.userAvatar}
                    />
                    <div>
                      <p className={styles.userName}>
                        {result.name} {result.surname} (@{result.username})
                      </p>
                      
                    </div>
                  </div>
                  </Link>
                );

              case 'tag':
                return (
                  
                  <div key={index} className={styles.tagCard}>
                    <Link to={`/tag/${result.label}`} key={index} style={{ textDecoration: 'none' }}>
                    <p className={styles.tagLabel}>{result.label}</p>
                    </Link>
                  </div>
                  
                );

              case 'subforum':
                return (
                  <div key={index} className={styles.subforumCard}>
                    <Link to={`/subforum/${result.id}`} className={styles.subforumLink}>
                      <h3>{result.name}</h3>
                    </Link>
                  </div>
                );

              case 'post':
                return (
                  <div key={index}>
                    <PostHeader post={result} />
                  </div>
                );

                case 'asset':
                  return (
                    <Link to={`/assets/${result.id}`} key={index} className={styles.assetLink}>
                      <div className={styles.assetCard}>
                        <img
                          src={result.imageUrl}
                          alt={result.name}
                          className={styles.assetImage}
                        />
                        <h3 className={styles.assetName}>{result.name}</h3>
                      </div>
                    </Link>
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
