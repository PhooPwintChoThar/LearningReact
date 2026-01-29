function Posts() {
  const [posts, setPosts] = useState([]); // Initialize state for storing posts

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://api-regional.codesignalcontent.com/posting-application-2/posts/');
      setPosts(response.data); // Fetch posts data and save posts in a state
    }
    fetchData();
  }, []);

  // Render posts data
  return (<div>
      {posts.map(post => (<div key={post.id}>
          <h3>{post.text}</h3>
          <p>Likes: {post.likesCount}</p>
        </div>
      ))}
    </div>);
}
export default Posts;
