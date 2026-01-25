import { useState, useRef } from 'react';

export default function BirthdayForm() {
  const [name, setName] = useState('Mars Explorer');
  const [age, setAge] = useState(0);

  return (
    <div>
      <h1>Virtual Birthday Party in Space</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Space Age <span role="img" aria-label="rocket">🚀</span>:
          <input
            value={age}
            type="number"
            placeholder="How old are you on Earth?"
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
