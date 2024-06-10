import { useEffect, useState, useRef } from "react";
import { values } from "../utils/_idbMessages";
import { duplicateCard, createCard, deleteCard } from "../utils/messagesUtil";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const [messages, setMessages] = useState([]);
  const [refreshComponent, setRefreshComponent] = useState(false);

  const notesFormRef = useRef();

  function refresh() {
    setRefreshComponent((prev) => !prev);
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
      <NotesForm submitHandler={submitHandler} notesFormRef={notesFormRef} />
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
