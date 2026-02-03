import { useState, useEffect } from 'react';
import axios from 'axios';

function SpacePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // TODO: Send a GET request using axios to the Cosmos-blog API and handle the response and error
    axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
    .then(response => setPosts(response.data))
    .catch(error=>console.log('error occurred'))
    // API URL: https://api-regional.codesignalcontent.com/posting-application-2/posts/
  }, []);

  return posts.map(post => (
    <div key={post.id}>
      <h3>{post.text}</h3>
      <p>Likes: {post.likesCount}</p>
    </div>
  ));
}

export default SpacePosts;
