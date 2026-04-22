import React from "react";

export default function Greeting(props) {
  return (
    <div className="greeting">
      <h2>Greetings ...!---{props.first}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        laudantium praesentium officia eaque ex cumque vel sequi voluptas
        consequuntur asperiores! Veniam repudiandae quam eum natus inventore,
        deserunt accusamus voluptates quos?
      </p>
    </div>
  );
}
