import React, { useState } from "react";

const Form = (props) => {
  const [fname, setFname] = useState("");

  const formSubmitted = (e) => {
    e.preventDefault(e);
    console.log("form submitted");
  };

  const handleChange = (e) => {
    e.preventDefault(e);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={formSubmitted}
    >
      <label htmlFor="fname">Full Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value=""
        onChange={handleChange}
      ></input>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
