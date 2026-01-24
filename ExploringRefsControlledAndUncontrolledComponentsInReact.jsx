import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} // Updates `name` upon typing in the input
      />
    </div>
  );
}
