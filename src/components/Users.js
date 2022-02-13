import React from "react";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "../reducers/usersApi";

const Users = () => {
  const { data, error, isLoading } = useGetAllUsersQuery();

  if (isLoading) {
    return <p>Loaidng Users ....</p>;
  }

  if (error) {
    return <p>Something Went Wrong</p>;
  }

  return (
    <div className="users">
      <h1>Users</h1>
      <h3>Using createApi Method</h3>
      <hr />

      {data.map((user) => (
        <div className="user-item" key={user.id}>
          <h4>{user.name}</h4>
          <Link to={`/users/${user.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
