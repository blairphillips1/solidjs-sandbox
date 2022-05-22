import { Component } from 'solid-js';
import { useCounter } from '../../store/Store';
import './home.css';

const Home: Component = () => {
  const [count] = useCounter();
  return (
    <div class="parent">
      <div class="child">
        <h1>
          Welcome {count()}
        </h1>
      </div>
    </div>
  );
};

export default Home;
