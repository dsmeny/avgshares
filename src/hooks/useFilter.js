import { useState, useRef } from "react";
import { updateLocalStorage } from "../utils/localStorage";

function useFilter() {
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [showCardFilter, setShowCardFilter] = useState(false);
  const [element, setElement] = useState("");

  const filterRef = useRef();

  function refresh() {
    setRefreshComponent((prev) => !prev);
  }

  function toggleCardFilter() {
    setShowCardFilter((prev) => !prev);
  }

  function selectedOption(value) {
    setElement(value);
    updateLocalStorage(value);
    toggleCardFilter();
  }

  const functionsFilter = {
    refresh,
    toggleCardFilter,
    selectedOption,
    setElement,
  };

  const statesFilter = {
    refreshComponent,
    showCardFilter,
    element,
  };

  const refsFilter = {
    filterRef,
  };

  return { functionsFilter, statesFilter, refsFilter };
}

export default useFilter;
