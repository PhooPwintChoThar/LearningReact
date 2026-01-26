import './App.css';

function Book({ children }) {
  return <div className="book">{children}</div>;
}

function Library() {
  // TODO: Use the `Book` component to wrap a message with a h2 title 'Adventures in React' and an author paragraph 'By Cosmo'
  return (
    <Book>
      <h2>Adventures in React</h2>
      <p>By Cosmo</p>
    </Book>
  );
}

export default Library;
