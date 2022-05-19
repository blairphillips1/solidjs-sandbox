import { Component, createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const [count, setCount] = createSignal(0)


const App: Component = () => {
  setCount(2);
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {count}
      </header>
    </div>
  );
};

export default App;
