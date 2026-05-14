import React from "react";
import FetchAipIntegration from "../Component/FetchAipIntegration";
import useCount from "../Component/useCount";

export default function Service() {
  const { count, increment, decrement, reset } = useCount(10);
  return (
    <div>
      <h2>Service Component</h2>
      <h2>count:{count}</h2>
      <button onClick={increment}>increent</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <FetchAipIntegration />
    </div>
  );
}
