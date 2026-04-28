import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./ConditionalRendering";
import ListRendering from "./ListRendering";
import Modulestyle from "./Modulestyle";
import ObjectStyle from "./ObjectStyle";
import UseStateHook from "./UseStateHook";
import DarkMode from "./Component/DarkMode";
import Field from "./Component/Field";
import RegForm from "./Component/RegForm";
import ConditionalForm from "./Component/ConditionalForm";
import UseeffectHook from "./Component/UseeffectHook";
import Timer from "./Component/Timer";

export default function App() {
  const name = "Hari";
  const area = "chennai";
  const number = "9638527412";

  const name2 = "kumar";
  const area2 = "salem";
  const number2 = "790445648848";

  const name3 = "dhoni";
  const area3 = "madurai";
  const number3 = "6040555555";

  return (
    <div>
      <Timer/>
      <UseeffectHook/>
      <ConditionalForm/>
      <RegForm />
      <Field />
      <DarkMode />
      <UseStateHook />
      <ObjectStyle />
      <Modulestyle />
      <ListRendering />
      <ConditionalRendering />
      <h2>Hello world--{name}</h2>
      <Greeting first={name} />
      <DestructuringProps name={name} area={area} number={number} />
      <DestructuringProps name={name2} area={area2} number={number2} />
      <DestructuringProps name={name3} area={area3} number={number3} />
    </div>
  );
}
