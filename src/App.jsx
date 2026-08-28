import { useEffect, useState } from "react";
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
      <h1 className="heading">Haloooo</h1>

      <UserInfo userId={1} />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;