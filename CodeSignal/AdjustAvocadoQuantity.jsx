import { useState } from 'react';

export default function App() {
  // Define a complex state for a fruit object
  const [fruitName, setFruitName] = useState('Avocado');
  const [fruitQuantity, setFruitQuantity]=useState(5);
  const [fruitPrice, setFruitPrice]=useState(1.5);

  return (
    <div>
      {/* TODO: Don't forget to update this to present correct state variables */}
      <p>Name: {fruitName}</p>
      <p>Quantity: {fruitQuantity}</p>
      <p>Price: ${fruitPrice}</p>
    </div>
  );
}
