import React, { useState, useEffect } from "react";

export default function UseeffectHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  useEffect(() => {
    console.log("Component mounted");
  }, [count]);

  useEffect(() => {
    console.log(`count changes to : ${count},${num}`);
  }, [count, num]);
  return (
    <div>
      <h2>UseEffect hook</h2>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increent</button>
      <button onClick={() => setNum(num + 1)}>Decrement</button>
    </div>
  );
}
