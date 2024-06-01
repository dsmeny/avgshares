import { useEffect, useState, useRef } from "react";
import { FORM_FIELD_ROWS } from "../enums.js";
import { onFormSubmit } from "../utils.js";
import FormField from "./FormField.js";
import FormHeaders from "./FormHeaders.js";

function Form({ formSubmitHandler }) {
  const [refresh, setRefresh] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }

    const formField = [...formRef.current.elements];
    formField[0].value = "";
    formField[0].focus();
  }, [refresh]);

  return (
    <form
      onSubmit={(e) => {
        onFormSubmit(e, formSubmitHandler);
      }}
      ref={formRef}
    >
      <FormHeaders />
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
