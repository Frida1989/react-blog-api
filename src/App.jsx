import { useEffect, useState } from "react";
import UserInfo from "./Components/UserInfo/UserInfo";
import Post from "./Components/Posts/Post";

import "./App.css";

function App() {
  const [show, setShow] = useState(true);
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
      <h1 className="heading">Haloooo</h1>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show list
      </button>
      {show && <Post />}
      <ul>
        {posts.map((post) => (
          <li>
            <h3>{post.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
