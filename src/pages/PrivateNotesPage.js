import { useEffect, useState, useRef } from "react";
import { values } from "../utils/_idbMessages";
import { duplicateCard, createCard, deleteCard } from "../utils/messagesUtil";
import { LuListFilter } from "react-icons/lu";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const [messages, setMessages] = useState([]);
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [showCardFilter, setShowCardFilter] = useState(false);

  const notesFormRef = useRef();
  const filterRef = useRef();

  function refresh() {
    setRefreshComponent((prev) => !prev);
  }

  function showCardFilterHandler() {
    setShowCardFilter((prev) => !prev);
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
    fetchData();
    notesFormRef.current.focus();
  }, [refreshComponent]);

  return (
    <div className="container notes_container">
      <div className="notes_container_header">
        {showCardFilter && (
          <CardFilter
            filterRef={filterRef}
            showCardFilter={showCardFilter}
            showCardFilterHandler={showCardFilterHandler}
          />
        )}
        <NotesForm submitHandler={submitHandler} notesFormRef={notesFormRef} />
        <div className="notes_filter">
          <span>Sort by date created</span>
          <LuListFilter onClick={showCardFilterHandler} />
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

function CardFilter({ filterRef, showCardFilterHandler }) {
  function changeHandler() {
    showCardFilterHandler();
  }

  return (
    <div className="container_filter">
      <select ref={filterRef} onChange={changeHandler}>
        <option>last ⬆</option>
        <option>first ⬇</option>
      </select>
    </div>
  );
}
export default PrivateNotesPage;
