import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef();  // Creates a ref

  function handleSubmit(e) {
    e.preventDefault();
    alert(inputRef.current.value);  // Reads directly from the DOM
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
