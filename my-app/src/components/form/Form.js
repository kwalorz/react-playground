import React, { useState } from "react";

const Form = (props) => {
  const [fname, setFname] = useState("");
  const [showErr, setShowErr] = useState(false);

  const formSubmitted = (e) => {
    e.preventDefault(e);
    console.log("form submitted");
  };

  const handleChange = (e) => {
    e.preventDefault(e);
    setFname(e.target.value);
  };

  const checkString = () => {
    if (fname.length < 5) {
      setShowErr(true);
    }
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
        value={fname}
        onChange={handleChange}
        onFocus={() => setShowErr(false)}
        onBlur={() => checkString()}
      ></input>
      <div className={`error-message ${showErr ? "show" : ""}`}>
        Please put your full name
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
