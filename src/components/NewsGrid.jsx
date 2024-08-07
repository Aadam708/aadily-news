import React, { useState, useEffect } from 'react';
import './NewsGrid.css';

const DEFAULT_IMAGE_URL = 'https://shorturl.at/e3rlM';

const fetchNews = async (page, category) => {
  try {
    console.log(`Fetching news - Page ${page}, Category ${category}...`);
    const url = `https://newsapi.org/v2/everything?q=${category}&language=en&sortBy=publishedAt&pageSize=100&page=${page}&apiKey=80266255ef2f45808b0998c333e4b25d`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    console.log('Fetched articles:', json);

    return json.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

const NewsGrid = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await fetchNews(page, category);
        setArticles(prevArticles => [...prevArticles, ...fetchedArticles]);
        setHasMore(fetchedArticles.length > 0);
      } catch (error) {
        setError('Failed to load news.');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [page, category]);

  const loadMoreArticles = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  if (loading && page === 1) {
    return (
      <div className="skeleton-loader">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="skeleton-item">
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-title"></div>
              <div className="skeleton-description"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleImageLoad = (e) => {
    e.target.classList.remove('loading');
    e.target.classList.add('loaded');
  };

  return (
    <div className="news-grid-container">
      <div className="featured-row">
        {articles.slice(0, 3).map((article, index) => (
          <a
            key={article.url}
            href={article.url}
            className={`news-item ${index === 1 ? 'featured' : 'small'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="news-item-image">
              <img
                src={article.urlToImage || DEFAULT_IMAGE_URL}
                alt={article.title}
                className="loading"
                onLoad={handleImageLoad}
                onError={(e) => (e.target.src = DEFAULT_IMAGE_URL)}
              />
            </div>
            <div className="news-item-content">
              <h3>{article.title}</h3>
              <p>{article.description || 'No description available'}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="normal-articles">
        {articles.slice(3).map((article) => (
          <a
            key={article.url}
            href={article.url}
            className="news-item normal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="news-item-image">
              <img
                src={article.urlToImage || DEFAULT_IMAGE_URL}
                alt={article.title}
                className="loading"
                onLoad={handleImageLoad}
                onError={(e) => (e.target.src = DEFAULT_IMAGE_URL)}
              />
            </div>
            <div className="news-item-content">
              <h3>{article.title}</h3>
            </div>
          </a>
        ))}
      </div>
      {hasMore && !loading && (
        <div className="load-more-container">
          <button onClick={loadMoreArticles}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css'; // Ensure the CSS file is in the same directory as Login.js

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });

      if (response.data.message === 'Logged in successfully!') {
        setMessage('Login successful');
        const userDetails = response.data.userDetails; // Extract user details
        login(userDetails); // Pass user details to the context
        console.log("User details stored:", userDetails); // Log user details
        navigate('/homePage');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
