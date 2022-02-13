import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getPostById } from "../reducers/postSlice";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post, status } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  const sentBack = () => {
    navigate("/posts");
  };

  if (status === "loading") {
    return <p>Loading Post...</p>;
  }

  if (status === "failed") {
    return <p>Failed To Load Post</p>;
  }

  return (
    <div className="post-item-each">
      <h1>Post Details</h1>
      <h4>{post.title}</h4>
      <p>{post.body}</p>

      <button onClick={sentBack}>Go Back</button>
    </div>
  );
};

export default Post;
