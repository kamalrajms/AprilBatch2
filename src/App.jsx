import React, { useContext, createContext, useState } from "react";
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
import StopWatch from "./Component/StopWatch";
import UseeffectAPI from "./Component/UseeffectAPI";
import UserefHook from "./Component/UserefHook";
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";
import UseReducerHook from "./Component/UseReducerHook";
import FormReducer from "./Component/FormReducer";
import UseIdHook from "./Component/UseIdHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import WebDev from "./Routes/WebDev";
import AppDev from "./Routes/AppDev";
import BlogDetailes from "./Component/BlogDetailes";

export const Pass = createContext();

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

  const [theme, setTheme] = useState("light");
  const data = { name: "React" };
  console.log(theme);
  const display = false;

  return (
    <div>
      {display && (
        <div>
          <UseIdHook />
          <UseIdHook />
          <UseIdHook />
          <UseIdHook />
          <FormReducer />
          <UseReducerHook />
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <Pass.Provider value={{ theme, setTheme, data }}>
              <ContextForm />
            </Pass.Provider>
          </div>
          <div style={{ padding: "20px", border: "2px solid #333" }}>
            <h2>App component---{name}</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
          <UserefHook />
          <UseeffectAPI />
          <StopWatch />
          <Timer />
          <UseeffectHook />
          <ConditionalForm />
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
      )}
      <BrowserRouter>
        <div className="header">
          <Link to={"/Home"}>home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={""}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />}>
            <Route path="WebDev" element={<WebDev />} />
            <Route path="AppDev" element={<AppDev />} />
          </Route>
          <Route path="" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogDetailes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
