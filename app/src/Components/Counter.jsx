import React from "react";
import style from "../Styles/Counter.module.css";



function Counter({ counter }) {
    return (
        <div className={style.counter}>
            {counter}
        </div>
    );
}



export default Counter;