  import React, { useState , useEffect} from 'react';
  import { Link } from 'react-router-dom';
  import mockData from "../data/mockData";
  import styles from './styles/Search.module.css'; // Import the CSS file

  const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('popular'); // Default to "popular"
    const [results, setResults] = useState([]);
    const [subforums, setSubforums] = useState([]); 
    const [posts, setPosts] = useState([]); // Store all fetched posts
    useEffect(() => {
      if (searchCategory === 'subforums' || searchCategory === 'posts') {
        fetch('http://35.246.188.121:8080/api/post/get-subforums/non-recursive')
          .then((response) => response.json())
          .then((data) => {
            if (data.successful) {
              const formattedSubforums = data.subforums.map((subforum) => ({
                id: subforum.id,
                name: subforum.title,
                posts: subforum.posts, // Store post IDs
                type: 'subforum',
              }));
              setSubforums(formattedSubforums);
    
              // Fetch posts using the post IDs
              const postPromises = data.subforums.flatMap((subforum) =>
                subforum.posts.map((postId) =>
                  fetch(`http://35.246.188.121:8080/api/post/get-post?postId=${postId}`)
                    .then((response) => response.json())
                    .then((postData) => {
                      if (postData.isSuccessful && postData.post) {
                        const post = postData.post;
    
                        // Filter out image and chart types
                        const filteredContent = post.content
                          ?.filter(
                            (contentItem) =>
                              contentItem.type === 'text' || contentItem.type === 'tag'
                          )
                          .map((contentItem) => contentItem.value || '')
                          .join(' ');
    
                        return {
                          id: post.id,
                          parentId: subforum.id,
                          title: post.title || 'Untitled Post',
                          description: filteredContent || 'No relevant content available.',
                          author: post.author.username || 'Unknown',
                          type: 'post',
                        };
                      }
                      return null; // Return null for unsuccessful or invalid posts
                    })
                    .catch((error) => {
                      console.error(`Error fetching post ${postId}:`, error);
                      return null; // Handle fetch error gracefully
                    })
                )
              );
    
              Promise.all(postPromises)
                .then((allPosts) => setPosts(allPosts.filter((post) => post !== null)))
                .catch((error) => console.error('Error fetching posts:', error));
            }
          })
          .catch((error) => console.error('Error fetching subforums:', error));
      }
    }, [searchCategory]);
    

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
          filteredResults = subforums.filter((subforum) =>
            subforum.name.toLowerCase().includes(lowerTerm)
          );
          setResults(filteredResults);
          break;

        case 'posts':
          filteredResults = posts.filter(
            (post) =>
              post.title?.toLowerCase().includes(lowerTerm) ||
              post.description?.toLowerCase().includes(lowerTerm)
          );
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
          {['popular', 'tags', 'subforums', 'posts', 'users'].map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`${styles.categoryButton} ${searchCategory === category ? styles.active : ''}`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Search results */}
        <div className={styles.resultsContainer}>
          {results.length === 0 ? (
            <p className={styles.noResults}>No results found.</p>
          ) : (
            results.map((result, index) => {
              switch (result.type) {
                case 'user':
                  return (
                    <div key={index} className={styles.userCard}>
                      <img src={result.avatar} alt={result.name} className={styles.userAvatar} />
                      <div>
                        <p className={styles.userName}>
                          {result.name} {result.surname} (@{result.username})
                        </p>
                        <p className={styles.userFollowers}>Followers: {result.followers}</p>
                      </div>
                    </div>
                  );

                case 'tag':
                  return (
                    <div key={index} className={styles.tagCard}>
                      <p className={styles.tagLabel}>{result.label}</p>
                      <p className={styles.tagInfo}>
                        Posts: {result.posts}, People: {result.people}
                      </p>
                    </div>
                  );

                case 'subforum':
                  return (
                    <div key={index} className={styles.subforumCard}>
                      <Link to={`/${result.id}`} className={styles.subforumLink}>
                        <h3>{result.name}</h3>
                      </Link>
                    </div>
                  );

                case 'post':
                  return (                    
                      <div key={index} className={styles.postCard}>
                        <Link to={`/${result.parentId}/${result.id}`} className={styles.postLink}>
                        <h4>{result.title}</h4>
                        <p>{result.description}</p>
                        <small>Author: {result.author}</small>
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
