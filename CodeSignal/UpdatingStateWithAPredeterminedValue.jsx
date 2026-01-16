import { useState } from 'react';

function GroceryList() {
  const [item, setItem] = useState({ name: 'Apple', quantity: 3, price: 0.5 });

  function updateQuantity() {
    const newItem = { ...item, quantity: 5 };
    setItem(newItem);
  }

  return (
    <div>
      <p>{item.name} - Quantity: {item.quantity}</p>
      <button onClick={updateQuantity}>Update Quantity</button>
    </div>
  );
}

export default GroceryList;
