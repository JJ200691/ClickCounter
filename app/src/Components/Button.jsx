import React from "react";
import style from "../Styles/Button.module.css";



function Button({ text, typeClick, handleClick }) {
    return (
        <div>
            <button
                className={typeClick ? style.clickButton : style.restartButton}
                onClick={handleClick}>
                {text}
            </button>
        </div>
    );
}



export default Button;