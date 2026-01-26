import { useState } from 'react';

// Child component
function Book({ title, onBorrow }) {
  return (
    <button onClick={() => onBorrow(title)}>
      Borrow
    </button>
  );
}

// Parent component
function Library() {
  const [book, setBook] = useState('');

  const handleBorrow = (borrowedTitle) => {
    alert(`Borrowed ${borrowedTitle}`);
  };

  return (
    <div>
      <input
        type="text"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        placeholder="Enter book title"
      />
      <Book title={book} onBorrow={handleBorrow} />
    </div>
  );
}

export default Library;
