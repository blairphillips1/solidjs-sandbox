import { Component } from 'solid-js';
import { useNavigate } from 'solid-app-router';
import { useCounter } from '../../store/Store';
import './login.css';

const Login: Component = () => {
  const navigate = useNavigate();
  const [count, setCount] = useCounter();
  const onSubmit = () => {
    setCount('Blair')
    navigate("/home", { replace: true });
  };
  return (
    <div class="parent">
      <div class="child">
        <label>
          Username :
          <input type="text" name="username" />
        </label>
        <br></br>
        <label>
          Password :
          <input type="text" name="password" />
        </label>
        <br></br>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
