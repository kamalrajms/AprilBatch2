import React from "react";

export default function ConditionalRendering() {
  const user = false;
  return (
    <div>
      <h2>Conditional rendering</h2>
      {user ? <h3>welcome back....</h3> : <h3>Please Login...!</h3>}

      <h2>Logical operator</h2>
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ea accusamus sapiente libero unde quasi mollitia repellat harum
          laboriosam. Dicta repellendus, quas tenetur qui corrupti nam dolorem
          ratione commodi magni.
        </p>
      )}
    </div>
  );
}
