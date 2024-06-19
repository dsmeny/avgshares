import { useState, useRef, useContext } from "react";
import { filterContext } from "../contexts/FilterContext";
import { createCard } from "../utils/messagesUtil";
import { values } from "../utils/_idbMessages";
import { optionValues } from "../utils/enums";
import { getLocalStorage } from "../utils/localStorage";

const { NEWEST } = optionValues;

function useNotes() {
  const [messages, setMessages] = useState([]);
  const { filterOption, setFilterOption } = useContext(filterContext);

  const notesFormRef = useRef();

  async function fetchData(val = null) {
    const data = await values();

    if (val) {
      setMessages((prev) => [...prev, JSON.parse(val)]);
      return;
    }

    const parsedMessages = data
      .map((message) => JSON.parse(message))
      .sort((a, b) =>
        filterOption === NEWEST
          ? new Date(a.createdOn) - new Date(b.createdOn)
          : new Date(b.createdOn) - new Date(a.createdOn)
      );

    setMessages(parsedMessages);
  }

  function updateAndFetchData() {
    const localStore = getLocalStorage();
    setFilterOption(localStore ? localStore : NEWEST);
    fetchData();
    notesFormRef.current.focus();
  }

  function submitHandler(e) {
    e.preventDefault();

    const target = e.target;
    const value = target[0].value;

    createCard(value, fetchData);
    notesFormRef.current.value = "";
    notesFormRef.current.focus();
  }

  const functionsNotes = {
    fetchData,
    submitHandler,
    updateAndFetchData,
  };

  const statesNotes = {
    messages,
  };

  const refsNotes = {
    notesFormRef,
  };

  return { functionsNotes, statesNotes, refsNotes };
}

export default useNotes;
