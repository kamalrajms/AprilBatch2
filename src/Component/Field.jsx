import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("hari");

  console.log(name);
  const [check, setCheck] = useState(false);
  console.log(check);

  return (
    <div>
      <nav>
        <label htmlFor="">name</label>
        {/* <input type="text" value={"react.js"}/> */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>name:{name}</h3>
      </nav>
      <nav>
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => setCheck(e.target.checked)}
        />
        <label htmlFor="">Check box</label>
      </nav>
    </div>
  );
}
