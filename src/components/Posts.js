import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../reducers/postSlice";

const Posts = () => {
  const { status, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ limit: 5 }));
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading Posts ...</p>;
  }

  if (status === "failed") {
    return <p>Failed To Load Posts</p>;
  }

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <h3>Using createSlice & createAsyncThunk</h3>
      <hr />
      {posts &&
        posts.map((post) => (
          <div className="each-post" key={post.id}>
            <p>{post.title}</p>
            <Link to={`/posts/${post.id}`}>Learn More</Link>
          </div>
        ))}
    </div>
  );
};

export default Posts;
