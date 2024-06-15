import { LuX } from "react-icons/lu";
import { optionValues } from "../utils/enums";

function CardFilter({ filterRef, selectedOption, toggleCardFilter, selected }) {
  const { NEWEST, OLDEST } = optionValues;

  function changeHandler() {
    const selectOption = [...filterRef.current.selectedOptions][0].value;
    selectedOption(selectOption);
  }

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
