import React from "react";
import { Link, Outlet } from "react-router-dom";
import useApi from "../Component/useApi";

export default function About() {
  const {
    data: users,
    error,
    loading,
  } = useApi("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h2>About component</h2>
      {users.map((user) => (
        <div key={user.id} style={{ border: "2px solid #333" }}>
          <h3>{user.mail}</h3>
          <h3>{user.name}</h3>
        </div>
      ))}
      <div className="sub-header">
        <Link to={"WebDev"}>WebDev</Link>
        <Link to={"AppDev"}>AppDev</Link>
      </div>
      <Outlet />
    </div>
  );
}
