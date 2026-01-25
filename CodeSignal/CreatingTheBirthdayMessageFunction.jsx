import { useState } from 'react';

export default function BirthdayParty() {
  const [guestName, setGuestName] = useState('');
  const [greetingMessage, setGreetingMessage] = useState('');

  // TODO: Write a function to update the greeting message with the guest name included.
  const greetGuest=()=>{
    setGreetingMessage(`Hi ${guestName}`);
  }

  return (
    <div>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={greetGuest/* TODO: Call the function you wrote when this button is clicked */}>Greet Me</button>
      <p>{greetingMessage}</p>
    </div>
  );
}
