import { useEffect, useState, useRef } from "react";
import { values } from "../utils/_idbMessages";
import { duplicateCard, createCard, deleteCard } from "../utils/messagesUtil";
import { updateLocalStorage, getLocalStorage } from "../utils/localStorage";
import { optionValues } from "../utils/enums";
import { LuListFilter } from "react-icons/lu";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import CardFilter from "../components/CardFilter";
import "../styles/notes.css";

const { NEWEST } = optionValues;

const PrivateNotesPage = () => {
  const [messages, setMessages] = useState([]);
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [showCardFilter, setShowCardFilter] = useState(false);
  const [element, setElement] = useState("");

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

  useEffect(() => {
    const localStore = getLocalStorage();
    setElement(localStore ? localStore : NEWEST);
    fetchData();
    notesFormRef.current.focus();
  }, [refreshComponent]);

  return (
    <div className="container notes_container">
      <div className="notes_container_header">
        {showCardFilter && (
          <CardFilter
            filterRef={filterRef}
            selectedOption={selectedOption}
            toggleCardFilter={toggleCardFilter}
            element={element}
          />
        )}
        <NotesForm submitHandler={submitHandler} notesFormRef={notesFormRef} />
        <div className="notes_filter" onClick={toggleCardFilter}>
          <span>What comes first?</span>
          <LuListFilter />
        </div>
      </div>
      <div className="notes_container_cards">
        <NoteCards
          messages={messages}
          removeCard={(id) => {
            deleteCard(id);
            refresh();
          }}
          duplicateCard={(id) => {
            duplicateCard(id, fetchData);
            refresh();
          }}
          refresh={refresh}
        />
      </div>
    </div>
  );
};

export default PrivateNotesPage;
