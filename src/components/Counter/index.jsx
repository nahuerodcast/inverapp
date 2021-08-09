import React, { useState } from "react";
import "../Counter/styles.css";

export const Counter = ({ quantity, quant }) => {
  const [counter, setCounter] = useState(1);
  console.log("render");

  const sumar = () => {
    if (counter < quantity) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const manualChange = (e) => {
    let value = e.target.value;
    if (value > quantity) {
      setCounter(quantity);
    } else {
      alert("No hay suficiente cantidad para esta orden");
      setCounter(value);
    }
  };

  return (
    <div className="counter-div">
      <button onClick={restar} className="button-left">
        -
      </button>
      <input
        type="number"
        value={counter}
        onChange={manualChange}
        className="text-center button-input"
      />
      <button onClick={sumar} className="button-right">
        +
      </button>
    </div>
  );
};
