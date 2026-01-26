import { useState } from 'react';

export default function BirthdayInvite() {
  // TODO: Create a state variable to store the guest's name and a function to update it
  const [guestName , setGuestName]=useState();

  return (
    <div>
      <p>Welcome to virtual space party {guestName} </p>
      <input type='text' value={guestName} onChange={e => setGuestName(e.target.value)}/>
    </div>
  );
}
