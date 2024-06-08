import { useEffect, useState } from "react";
import { values, set, del } from "../utils/_idbMessages";
import { v4 as uuidv4 } from "uuid";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const [messages, setMessages] = useState([]);
  const [deleteCard, setDeleteCard] = useState(false);
  const [key, setKey] = useState("");

  async function removeCard(messageid) {
    setKey(messageid);
    setDeleteCard(true);
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
    const date = new Date();
    const id = uuidv4();
    const newValue = JSON.stringify({
      id,
      header: "",
      body: `${date.toLocaleString()}: ${value}`,
    });

    set(newValue, id);

    fetchData(newValue);
  }

  useEffect(() => {
    if (deleteCard) {
      del(key);
      setDeleteCard(false);
    }
    fetchData();
  }, [deleteCard]);

  return (
    <div className="container notes_container">
      <NotesForm submitHandler={submitHandler} />
      <div className="notes_container_cards">
        <NoteCards messages={messages} removeCard={removeCard} />
      </div>
    </div>
  );
};

export default PrivateNotesPage;
