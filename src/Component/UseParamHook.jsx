import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UseParamHook() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {user.map((person) => (
          <li key={person.id}>
            <Link to={`/blog/:${person.email}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
