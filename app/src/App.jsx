import React from "react";
import Counter from "./Components/Counter";
import Button from "./Components/Button";
import { useState } from "react";
import style from "./Styles/App.module.css";


function App() {

  const [clicks, setClicks] = useState(0);

  const addClick = () => {
    setClicks(clicks + 1);
  };

  const restartClick = () => {
    setClicks(0);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>WELCOME</h1>
      <Counter
        counter={clicks} />
      <div className={style.buttonContainer}>
        <Button
          text="CLICK"
          typeClick={true}
          handleClick={addClick} />
        <Button
          text="RESTART"
          typeClick={false}
          handleClick={restartClick} />
      </div>
    </div>
  );
}



export default App;
