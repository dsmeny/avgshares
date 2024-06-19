import { useState, useRef } from "react";
import { updateLocalStorage, getLocalStorage } from "../utils/localStorage";
import { optionValues } from "../utils/enums";
import { createCard } from "../utils/messagesUtil";
import { values } from "../utils/_idbMessages";

const { NEWEST } = optionValues;

function useFilter() {
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [showCardFilter, setShowCardFilter] = useState(false);
  const [element, setElement] = useState("");
  const [messages, setMessages] = useState([]);

  const notesFormRef = useRef();
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

  async function fetchData(val = null) {
    const data = await values();

    if (val) {
      setMessages((prev) => [...prev, JSON.parse(val)]);
      return;
    }

    const parsedMessages = data.map((message) => JSON.parse(message));
    setMessages(parsedMessages);
  }

  function submitHandler(e) {
    e.preventDefault();

    const target = e.target;
    const value = target[0].value;

    createCard(value, fetchData);
    notesFormRef.current.value = "";
    notesFormRef.current.focus();
  }

  function updateAndFetchData() {
    const localStore = getLocalStorage();
    setElement(localStore ? localStore : NEWEST);
    fetchData();
    notesFormRef.current.focus();
  }

  const functions = {
    refresh,
    toggleCardFilter,
    selectedOption,
    fetchData,
    submitHandler,
    updateAndFetchData,
  };

  const state = {
    refreshComponent,
    showCardFilter,
    element,
    messages,
  };

  const refs = {
    notesFormRef,
    filterRef,
  };

  return { functions, state, refs };
}

export default useFilter;
