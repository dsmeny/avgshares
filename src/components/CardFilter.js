import { useEffect } from "react";
import { LuX } from "react-icons/lu";
import { optionValues } from "../utils/enums";

function CardFilter({ filterRef, selectedOption, toggleCardFilter, element }) {
  const { NEWEST, OLDEST } = optionValues;

  function changeHandler() {
    const selectFilter = filterRef.current;
    const selectOption = [...selectFilter.selectedOptions][0].value;
    selectedOption(selectOption);
  }

  useEffect(() => {
    const selectFilter = filterRef.current;
    if (selectFilter) {
      [...selectFilter.options].forEach((option) => {
        if (option.value === element) {
          option.selected = true;
        }
      });
    }
  }, [element]);

  return (
    <div className="container_filter">
      <select ref={filterRef} onChange={changeHandler} autoFocus>
        <option>{NEWEST}</option>
        <option>{OLDEST}</option>
      </select>
      <LuX onClick={toggleCardFilter} />
    </div>
  );
}

export default CardFilter;
