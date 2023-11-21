import React, { useState } from "react";
import "./post.css";
import postsData from "./postsData.json";

const Post = () => {
  const [likedPosts, setLikedPosts] = useState(
    Array(postsData.length).fill(false)
  );

  const handleLikeClick = (index) => {
    const newLikedPosts = [...likedPosts];
    newLikedPosts[index] = !newLikedPosts[index];
    setLikedPosts(newLikedPosts);
  };

  return (
    <div className="mainContainer">
      <div className="post">
        <h2>{postsData.length} Posts</h2>
      </div>
      <div className="line">
        <hr className="hr1" noshade />
        <hr className="hr2" />
      </div>

      <div className="postContainer">
        {postsData.map((post, index) => (
          <div className="postBox" key={index}>
            <div className="line1">
              <h3 className="heading">{post.title}</h3>
              <img
                className="like"
                src={likedPosts[index] ? post.afterLike : post.likeImageSrc}
                alt=""
                onClick={() => handleLikeClick(index)}
              />
            </div>

            <div className="line2">
              <p>{post.content}</p>
            </div>

            <div className="line3">
              <p className="left">
                <span className="span">{post.category}</span> by <br />{" "}
                {post.author}
              </p>
              <p className="right">
                {post.date} . {post.readTime} Read . {post.views} Views
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
