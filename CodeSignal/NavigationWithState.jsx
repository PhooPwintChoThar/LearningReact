import { useNavigate } from 'react-router-dom';

function UpdateButton() {
  let navigate = useNavigate();
  
  let handleClick = () => {
    navigate("/login", { state: { from: "update" } }); // Adds state when navigating
  };
  
  return <button onClick={handleClick}>Update post</button>;
}

// In Login component
import { useLocation } from 'react-router-dom';

function Login() {
  let location = useLocation();
  let from = location.state?.from; // Accesses the state passed during navigation
}
