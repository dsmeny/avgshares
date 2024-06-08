import { useEffect, useState } from "react";
import { values, set, del } from "../utils/_idbMessages";
import { createNewMessage, getMessage } from "../utils/messagesUtil";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const [messages, setMessages] = useState([]);
  const [refreshComponent, setRefreshComponent] = useState(false);

  async function removeCard(messageid) {
    del(messageid);
    setRefreshComponent((prev) => !prev);
  }

  function refresh() {
    setRefreshComponent((prev) => !prev);
  }

  async function duplicateCard(messageid) {
    const { body } = await getMessage(messageid);
    const { newMessage, id } = createNewMessage(body);
    set(newMessage, id);
    refresh();
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
    fetchData();
  }, [refreshComponent]);

  return (
    <div className="container notes_container">
      <NotesForm submitHandler={submitHandler} />
      <div className="notes_container_cards">
        <NoteCards
          messages={messages}
          removeCard={removeCard}
          duplicateCard={duplicateCard}
          refresh={refresh}
        />
      </div>
    </div>
  );
};

export default PrivateNotesPage;
