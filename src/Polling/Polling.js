import React, { useState, useEffect } from 'react';

const PollingApp = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
      );
      const data = await response.json();
      const newPosts = data.hits;
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchPosts, 10000);
    console.log(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.objectID}>
              <td>{post.title}</td>
              <td>
                <a href={post.url}>{post.url}</a> 
              </td>
              <td>{post.created_at}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PollingApp;
