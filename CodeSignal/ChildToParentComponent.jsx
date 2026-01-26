import React, { useState } from "react";

function Grandparent() {
  const [grandChildData, setGrandChildData] = useState("");
  const handleCallback = (grandChildData) => {
    setGrandChildData(grandChildData);  // The state is updated with data from the grandchild
  };
  return <Parent grandparentCallback={handleCallback}/>;
}

function Parent({ grandparentCallback }) {
  return <Child parentCallback={grandparentCallback}/>;
}

function Child({ parentCallback }) {
  return <button onClick={() => parentCallback("Data from Grandchild")}>Click</button>;
}
