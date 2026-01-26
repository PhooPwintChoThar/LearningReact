function Box(props) {
  return <div className='box'>{props.children}</div>  // It renders the components passed to it
}

function App() {
  return (
    <Box>
      <h2>Hello there!</h2>  // These components are passed to `Box` as `props.children`
      <p>Welcome to React</p>
    </Box>
  );
}
