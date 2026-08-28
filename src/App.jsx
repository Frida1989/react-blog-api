import { useEffect, useState } from "react";
import Post from "./Components/Posts/Post";
import UserInfo from "./Components/UserInfo/UserInfo";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();

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