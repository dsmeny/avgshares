import { useEffect, useState } from "react";
import { FORM_FIELD_ROWS } from "../enums.js";
import FormField from "./FormField.js";

function Form({ formSubmitHandler }) {
  const [refresh, setRefresh] = useState(false);

  function onFormSubmit(e) {
    e.preventDefault();

    const entries = [];

    const elements = Array.from(
      e.target.elements,
      (element) => element && element.value
    ).filter((el) => el);

    for (let i = 0; i < elements.length; i += 2) {
      const shares = elements[i];
      const price = elements[i + 1];

      if (shares && price) {
        entries.push({
          price: parseFloat(price),
          count: parseFloat(shares),
        });
      }
    }

    formSubmitHandler(entries);
  }

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }
  }, [refresh]);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form_headers">
        <h3>Shares Bought</h3>
        <h3>Purchase Price</h3>
      </div>
      {Array(FORM_FIELD_ROWS)
        .fill()
        .map((_, i) => (
          <FormField key={i} index={i + 1} />
        ))}

      <div className="bts">
        <input type="submit" value="Calculate" />
        <button
          onClick={() => {
            setRefresh(true);
          }}
        >
          reset
        </button>
      </div>
    </form>
  );
}

export default Form;
