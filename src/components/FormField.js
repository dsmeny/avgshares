import { useState } from "react";
import { PRICE, SHARES, MAX_VALUE, MIN_VALUE } from "../enums.js";

function FormField({ index }) {
  const [sharePrice, setSharePrice] = useState(0);
  const [shareAmount, setShareAmount] = useState(0);

  return (
    <div className="formContainer">
      <div className="formItem">
        <label>{index}. </label>
        <input
          name={PRICE}
          type="number"
          step="1"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={sharePrice}
          onMouseDown={() => {
            sharePrice === 0 && setSharePrice("");
          }}
          onChange={(e) => {
            setSharePrice(Number(e.target.value));
          }}
        />
      </div>
      <div className="formItem">
        <label>$ </label>
        <input
          name={SHARES}
          type="number"
          step="0.01"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={shareAmount}
          onMouseDown={() => {
            shareAmount === 0 && setShareAmount("");
          }}
          onChange={(e) => {
            setShareAmount(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default FormField;
