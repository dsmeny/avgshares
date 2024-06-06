import { useState, useEffect, useRef } from "react";
import { keys, put, get } from "../utils/_idbMessages";
import { FiEdit2, FiTrash2, FiCopy, FiFilePlus } from "react-icons/fi";

const NoteCards = ({ db }) => {
  return (
    <ul className="notes_cards">
      {db.map((messages) => (
        <NoteCard key={messages.id} messages={messages} />
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
      const messageKeys = await keys();
      const matchedMessageKey = messageKeys.find(
        (message) => message === messages.id
      );

      const matchedIdbRecord = await get(matchedMessageKey);
      const message = JSON.parse(matchedIdbRecord);
      message.header = labelVal;

      put(JSON.stringify(message), matchedMessageKey);
      setLabel(labelVal);
      setIsReadOnly(true);
    }
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
          <FiEdit2 onClick={editLabel} className="notes_card_icons" />
        </div>
        <div className="notes_card_btns">
          <FiTrash2 className="notes_card_icons" />
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
