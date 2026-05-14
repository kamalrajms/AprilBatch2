import React, { useState, useEffect } from "react";

export default function FetchAipIntegration() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);
  console.log(user);

  if (loading) return <p>Loading user....</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>user List</h2>
      {user.map((user) => (
        <div
          key={user.id}
          style={{ padding: "20px", border: "2px solid #333" }}
        >
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
}
