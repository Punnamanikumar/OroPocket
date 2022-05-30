import React, { useState } from "react";
import validator from "validator";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [toggle, setToggle] = useState(true);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, number);
    if (validator.isEmail(email)) {
      console.log("valid");
    } else if (email === "") {
      alert("Please Give Proper Email");
      toggle(true);
    } else {
      alert("Email Not Valid");
      toggle(true);
    }
    if (name === "") {
      alert("Please Give Proper Name");
    } else if (validator.isNumeric(name)) {
      alert("PLease give name as string");
      toggle(true);
    }

    if (number.length !== 10) alert("Please Give Number with 10Digits");
    else {
      setToggle(!toggle);
      console.log(typeof name);
    }
  };

  return (
    <div>
      {toggle ? (
        <div>
          <label>Name: </label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Email: </label>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Number: </label>
          <input
            value={number}
            type="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <button onClick={handelSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>Name:{name}</h2>
          <h2>Email-id:{email}</h2>
          <h2>number:{number}</h2>
        </div>
      )}

      {!toggle ? <button onClick={() => setToggle(!toggle)}>Back</button> : ""}
    </div>
  );
};

export default Form;
