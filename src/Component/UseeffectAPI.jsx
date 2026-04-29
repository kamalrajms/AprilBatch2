import React, { useState, useEffect } from "react";

export default function UseeffectAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      //api=[{},{},{},{}...{}]            // raw data
      .then((res) => res.json())
      //api=[{},{},{},{}...{}]            // key and value data
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h2>User list</h2>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <ul>
          {/* //user=[{name:""},{},{},{}...{}]             */}
          {/* person={name:""} */}
          {user.map((person) => (
            <li key={person.id}>
              {person.name}---{person.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
