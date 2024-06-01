import { useEffect, useState } from "react";
import { values, set } from "../utils/_cliDB";
import { v4 as uuidv4 } from "uuid";

const PrivateNotesPage = () => {
  const [db, setDb] = useState([]);

  async function fetchData(val = null) {
    const data = await values();
    if (val) {
      setDb((prev) => [...prev, val]);
      return;
    }

    setDb(data);
  }

  function submitHandler(e) {
    e.preventDefault();

    const target = e.target;
    const value = target[0].value;
    const date = new Date();
    const newValue = `${date.toLocaleString()}: ${value}`;

    set(newValue, uuidv4());

    fetchData(newValue);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container" onSubmit={submitHandler}>
      <form>
        <input type="text" placeholder="enter a private message." />
        <input type="submit" />
      </form>
      <div className="notes_output">
        <ul>
          {db.map((messages, i) => (
            <li key={i}>{messages}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrivateNotesPage;
