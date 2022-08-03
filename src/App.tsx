import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskSession } from "./components/NewTaskSession";
import { Tasks } from "./components/Tasks";
import './global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NewTaskSession />
      <Tasks />
    </>
  );
}

export default App;
