import { useState, useEffect, useRef } from "react";
import { put, get } from "../utils/_idbMessages";
import { FiEdit2, FiTrash2, FiCopy, FiFilePlus } from "react-icons/fi";

const NoteCards = ({ messages, removeCard }) => {
  return (
    <ul className="notes_cards">
      {messages.map((message) => (
        <NoteCard key={message.id} message={message} removeCard={removeCard} />
      ))}
    </ul>
  );
};

function NoteCard({ message, removeCard }) {
  const [label, setLabel] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { id, header, body } = message;

  const inputRef = useRef();

  function deleteHandler() {
    removeCard(id);
  }

  useEffect(() => {
    const input = inputRef.current;

    if (isReadOnly === false) {
      input.focus();
      return;
    }

    if (label === "") {
      setLabel(header);
    }
  }, [isReadOnly]);

  function editLabel() {
    if (isReadOnly === true) {
      setIsReadOnly(false);
      return;
    } else {
      setIsReadOnly(true);
    }
  }

  function changeHandler(e) {
    const value = e.target.value;
    setLabel(value);
  }

  async function eventHandler(e) {
    if (e.keyCode === 13) {
      const labelVal = inputRef.current.value;

      const matchedIdbRecord = await get(id);
      const message = JSON.parse(matchedIdbRecord);
      message.header = labelVal;

      put(JSON.stringify(message), id);
      setLabel(labelVal);
      setIsReadOnly(true);
    }
  }

  return (
    <li className="notes_card">
      <div className="notes_card_header">
        <div className="notes_card_label">
          <input
            type="text"
            className={`${isReadOnly ? "" : "notes_card_focus"}`}
            readOnly={isReadOnly}
            placeholder="enter a label"
            onChange={changeHandler}
            value={label}
            onKeyUp={eventHandler}
            ref={inputRef}
          />
          <FiEdit2
            onClick={editLabel}
            className={`notes_card_icons ${isReadOnly ? "" : "active"}`}
          />
        </div>
        <div className="notes_card_btns">
          <FiTrash2 className="notes_card_icons" onClick={deleteHandler} />
          <FiCopy className="notes_card_icons" />
          <FiFilePlus className="notes_card_icons" />
        </div>
      </div>
      <div className="notes_card_message">
        <p>{body}</p>
      </div>
    </li>
  );
}

export default NoteCards;
