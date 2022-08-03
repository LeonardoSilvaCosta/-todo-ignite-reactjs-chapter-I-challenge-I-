import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskSession } from "./components/NewTaskSession";
import './global.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NewTaskSession />
    </>
  );
}

export default App;
