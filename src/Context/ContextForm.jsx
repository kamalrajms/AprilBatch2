import React,{useContext} from "react";
import ContectField from "./ContectField";
import { Pass } from "../App";

export default function ContextForm() {
    const {theme}=useContext(Pass)
  return (
    <div className={theme}>
      <h2>ContextForm reg</h2>
      <ContectField />
    </div>
  );
}
