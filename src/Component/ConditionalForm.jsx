import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handlechange2 = (e) => {
  //     const { name, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    if (!formData.userName || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    if (!formData.terms) {
      setError("accept the checkbox");
      return;
    }

    setError("");
    alert("Form submitted  successfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registrtion form</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <input
          type="text"
          value={formData.userName}
          name="userName"
          onChange={handlechange}
          placeholder="Enter a name"
        />
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handlechange}
          placeholder="Enter a email"
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handlechange}
          placeholder="Enter a password"
        />
        <input
          type="checkbox"
          checked={formData.terms}
          name="terms"
          onChange={handlechange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
