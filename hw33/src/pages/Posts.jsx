import React from "react";
import { useState, useEffect } from "react";
import styles from "./Posts.module.scss";
import { Link } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const qetAllPosts = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((post) => post.json())
        .then((data) => setPosts(data));
    };
    qetAllPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.Post}>
          <Link to={`${post.id}`}> {post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
