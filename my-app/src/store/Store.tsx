import { createSignal, createContext, useContext } from "solid-js";

const ApplicationContext = createContext();

export function ApplicationProvider(props:any) {
  const [count, setCount] = createSignal<string>('');
  const store = [
    count,
    setCount
  ]
  return (
    <ApplicationContext.Provider value={store}>
      {props.children}
    </ApplicationContext.Provider>
  );
}

export function useCounter() { return useContext(ApplicationContext); }