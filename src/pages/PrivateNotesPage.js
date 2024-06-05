import { useEffect, useState } from "react";
import { values, set } from "../utils/_idbMessages";
import { v4 as uuidv4 } from "uuid";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const [db, setDb] = useState([]);

  async function fetchData(val = null) {
    const data = await values();

    if (val) {
      setDb((prev) => [...prev, JSON.parse(val)]);
      return;
    }

    const parsedMessages = data.map((message) => JSON.parse(message));
    setDb(parsedMessages);
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
    fetchData();
  }, []);

  return (
    <div className="container notes_container">
      <NotesForm submitHandler={submitHandler} />
      <div className="notes_container_cards">
        <NoteCards db={db} />
      </div>
    </div>
  );
};

export default PrivateNotesPage;
