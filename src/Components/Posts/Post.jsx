const Post = ({ post }) => {

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

            <p className="post-body">
                {post.body}
            </p>

            <div className="post-stats">

                <span>
                    👍 {post.reactions.likes}
                </span>

                <span>
                    👁️ {post.views} visningar
                </span>

            </div>

            <button className="user-info-button">
                Visa användarinfo
            </button>

        </article>
    );
};

export default Post;
