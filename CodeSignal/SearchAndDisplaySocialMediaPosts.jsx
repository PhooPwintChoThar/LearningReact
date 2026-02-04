import { useState, useEffect } from 'react';

function SocialMediaPosts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api-regional.codesignalcontent.com/posting-application-2/posts/')
      .then(/* TODO: Handle the response and update the state */
      response => {
        if (!response.ok){
          throw Error('error')
        }
        
        return response.json()
      }
      )
      .then(data =>setPosts(data.data))
      .catch(/* TODO: Log any errors to the console */
      ()=>console.error('error occurred'));
  }, []);

  const filterPosts = (word) => {
    return posts.filter(post =>
      post.text.toLowerCase().includes(word.toLowerCase())
    );
  };
  
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by words in post"
      />
      <ul>
        {filterPosts(searchTerm).map(post => (
          <li key={post.id}>{/* TODO: Display post text */post.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMediaPosts;
