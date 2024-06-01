import { useState, useEffect, useRef } from "react";
import { FiEdit2 } from "react-icons/fi";

const NoteCards = ({ db }) => {
  return (
    <ul className="notes_cards">
      {db.map((messages, i) => (
        <NoteCard key={i} messages={messages} />
      ))}
    </ul>
  );
};

function NoteCard({ messages }) {
  const [label, setLabel] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { header, body } = messages;

  const inputRef = useRef();

  function editLabel() {
    setIsReadOnly((prev) => !prev);
  }

  function changeHandler(e) {
    const value = e.target.value;
    setLabel(value);
  }

  function eventHandler(e) {
    if (e.keyCode === 13) {
      setLabel(e.target.value);
      setIsReadOnly(true);
    }
  }

  useEffect(() => {
    const input = inputRef.current;

    if (isReadOnly === false) {
      input.focus();
    }
  }, [isReadOnly]);

  return (
    <li className="notes_card">
      <div className="notes_card_header">
        <div className="notes_card_label">
          <input
            type="text"
            readOnly={isReadOnly}
            placeholder="enter a label"
            onChange={changeHandler}
            value={label}
            onKeyUp={eventHandler}
            ref={inputRef}
          />
          <FiEdit2 onClick={editLabel} />
        </div>
        <div className="notes_card_btns">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
      <div className="notes_card_message">
        <p>{body}</p>
      </div>
    </li>
  );
}

export default NoteCards;
