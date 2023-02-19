import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getOnePost = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((post) => post.json())
        .then((data) => setPost(data));
    };

    getOnePost();
  }, [id]);

  const callback = () => navigate(-1);

  return (
    <div>
      <div>Post</div>
      <h1>{post.title}</h1>
      <h2>{post.body}</h2>
      <button onClick={callback}>Go back</button>
    </div>
  );
  //   чому б одразу не зробити кнопку ))
};

export default Post;
