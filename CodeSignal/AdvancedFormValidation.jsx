import React, { useState } from "react";

function SimpleEmailForm() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);  // The email state is updated as the user types
  };
  // Validate if the entered email is in a valid format
  const validateEmail = (e) => {
    e.preventDefault();
    const pattern = // regular expression for email
    pattern.test(email) ? alert('Email is valid') : alert('Invalid email');
  };
  return (
    <form onSubmit={validateEmail}>
      <input type="text" value ={email} onChange={handleEmailChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
