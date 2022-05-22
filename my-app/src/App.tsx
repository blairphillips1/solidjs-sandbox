import { Component } from 'solid-js';
import Router from './routes/Router.jsx'
import { ApplicationProvider } from './store/Store';

const App: Component = () => {
  return (
    <ApplicationProvider>
      <Router />
    </ApplicationProvider>
  );
};

export default App;
