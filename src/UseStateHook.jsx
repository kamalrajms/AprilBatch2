import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState(true);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      <h2>user page</h2>
      {user ? <h3>welcome back.....</h3> : <h3>please login...!</h3>}
      {user && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis optio,
          ratione facere quos expedita, quo laboriosam velit harum voluptas
          tenetur accusantium eligendi, dignissimos necessitatibus iure quasi
          minus nesciunt quae laudantium.
        </p>
      )}
      <button onClick={() => setUser(!user)}>sign {user ? "out" : "in"}</button>
    </div>
  );
}

// !true==false
// !false==true