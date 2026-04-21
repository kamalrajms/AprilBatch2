import React from "react";

export default function DestructuringProps({ name, area, number }) {
  return (
    <div>
      <h2>User data</h2>
      <h3>name:{name}</h3>
      <h3>Area:{area}</h3>
      <h3>number:{number}</h3>
    </div>
  );
}
