import { useEffect, useState } from "react";
import { values, set, del } from "../utils/_idbMessages";
import { createNewMessage, getMessage } from "../utils/crudMessages";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const [messages, setMessages] = useState([]);
  const [deleteCard, setDeleteCard] = useState(false);
  const [refreshComponent, setRefreshComponent] = useState(false);
  const [key, setKey] = useState("");

  async function removeCard(messageid) {
    setKey(messageid);
    setDeleteCard(true);
  }

  async function duplicateCard(messageid) {
    const { body } = await getMessage(messageid);
    const { newMessage, id } = createNewMessage(body);
    set(newMessage, id);
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

    const { newMessage, id } = createNewMessage(value);

    set(newMessage, id);
    fetchData(newMessage);
  }

  useEffect(() => {
    if (deleteCard) {
      del(key);
      setDeleteCard(false);
    }
    fetchData();
  }, [deleteCard, refreshComponent]);

  return (
    <div className="container notes_container">
      <NotesForm submitHandler={submitHandler} />
      <div className="notes_container_cards">
        <NoteCards
          messages={messages}
          removeCard={removeCard}
          duplicateCard={duplicateCard}
        />
      </div>
    </div>
  );
};

export default PrivateNotesPage;
