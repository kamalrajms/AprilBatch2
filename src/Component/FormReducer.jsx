import React, { useReducer } from "react";

export default function FormReducer() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
      ...state, //previous data
      [action.field]: action.value,     //new data
    };
  }
  //   action={
  //       field: e.target.name,
  //       value: e.target.value,
  //     }
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }

  return (
    <div>
      <h2>Reducer Form</h2>
      <input
        name="name"
        type="text"
        value={state.name}
        placeholder="enter a name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={state.email}
        placeholder="Enter a email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={state.password}
        placeholder="Enter a password"
        onChange={handleChange}
      />
    </div>
  );
}
