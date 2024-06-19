import { useState, useRef, useContext } from "react";
import { updateLocalStorage } from "../utils/localStorage";
import { filterContext } from "../contexts/FilterContext";

function useFilter() {
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [showCardFilter, setShowCardFilter] = useState(false);
  const { setFilterOption } = useContext(filterContext);

  const filterRef = useRef();

  function refresh() {
    setRefreshComponent((prev) => !prev);
  }

  function toggleCardFilter() {
    setShowCardFilter((prev) => !prev);
  }

  function selectedOption(value) {
    setFilterOption(value);
    updateLocalStorage(value);
    toggleCardFilter();
  }

  const functionsFilter = {
    refresh,
    toggleCardFilter,
    selectedOption,
  };

  const statesFilter = {
    refreshComponent,
    showCardFilter,
  };

  const refsFilter = {
    filterRef,
  };

  return { functionsFilter, statesFilter, refsFilter };
}

export default useFilter;
