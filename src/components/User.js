import React from "react";
import { useNavigate, useParams } from "react-router";
import { useGetUserByIdQuery } from "../reducers/usersApi";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserByIdQuery(id);

  const sentBack = () => {
    navigate("/users");
  };

  if (isLoading) {
    return <p>Loading User ....</p>;
  }

  if (error) {
    return <p>Something Went Wrong</p>;
  }

  return (
    <div className="user-item-each">
      <h1>User Details</h1>
      <h4>{data.name}</h4>
      <p>{data.email}</p>
      <p>{data.phone}</p>

      <button onClick={sentBack}>Go Back</button>
    </div>
  );
};

export default User;
