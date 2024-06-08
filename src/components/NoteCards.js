import { useState, useEffect, useRef } from "react";
import { updateMessage } from "../utils/crudMessages";
import { FiEdit2, FiTrash2, FiCopy, FiFilePlus } from "react-icons/fi";

const NoteCards = ({ messages, removeCard, duplicateCard }) => {
  return (
    <ul className="notes_cards">
      {messages.map((message) => (
        <NoteCard
          key={message.id}
          message={message}
          removeCard={removeCard}
          duplicateCard={duplicateCard}
        />
      ))}
    </ul>
  );
};

function NoteCard({ message, removeCard, duplicateCard }) {
  const [label, setLabel] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { id, header, createdOn, body } = message;

  const inputRef = useRef();

  function deleteHandler() {
    removeCard(id);
  }

  function duplicateCardHandler() {
    duplicateCard(id);
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

  async function updateMessageHandler(e) {
    if (e.keyCode === 13) {
      const labelVal = inputRef.current.value;

      updateMessage(id, labelVal);
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
            onKeyUp={updateMessageHandler}
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
          <FiFilePlus
            className="notes_card_icons"
            onClick={duplicateCardHandler}
          />
        </div>
      </div>
      <div className="notes_card_message">
        <p>{`${createdOn}: ${body}`}</p>
      </div>
    </li>
  );
}

export default NoteCards;
