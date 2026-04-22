import React from "react";

export default function ListRendering() {
  // eg1
  const fruits = ["Apple", "Banana", "mango", "Orange", "lemon"];

  //   eg2
  const user = [
    // { id: 1, name: "kamal" },
    // { id: 2, name: "harish" },
    // { id: 3, name: "Rahul" },
  ];

  console.log(user.length);

  return (
    <div>
      {/* eg1 */}
      <h2>fruits data</h2>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      {/* eg2 */}
      <h2>user data</h2>
      {user.length > 0 ? (
        <ul>
          {user.map((person) => (
            <li key={person.id}>
              {person.id}...{person.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>no data found</p>
      )}

      {/* person={ id: 1, name: "kamal" } */}
    </div>
  );
}
