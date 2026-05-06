import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h2>About component</h2>
      <div className="sub-header">
        <Link to={"WebDev"}>WebDev</Link>
        <Link to={"AppDev"}>AppDev</Link>
      </div>
      <Outlet />
    </div>
  );
}
