import { useEffect, useState } from "react";
import Post from "./Components/Posts/Post";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://dummyjson.com/posts");
      let data = await response.json();
      setPosts(data.posts);
    };

    getData();
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}

export default App;
