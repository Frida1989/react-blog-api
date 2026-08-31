import UserInfo from "../UserInfo/UserInfo";
import { useState } from "react";

const Post = ({ post }) => {
  const [showUser, setShowUser] = useState(false);

  return (
    <article className="post">
      <h2>{post.title}</h2>

      <div className="post-tags">
        {post.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <p className="post-body">{post.body}</p>

      <div className="post-stats">
        <span>👍 {post.reactions.likes}</span>

        <span>👁️ {post.views} visningar</span>
      </div>

      <button
        className="user-info-button"
        onClick={() => setShowUser(!showUser)}
      >
        Visa användarinfo
      </button>

      {showUser && <UserInfo userId={post.userId} />}
      
    </article>
  );
};

export default Post;
