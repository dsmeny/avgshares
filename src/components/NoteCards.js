import React from "react";

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
  const { header, body } = messages;

  return (
    <li className="notes_card">
      <div className="notes_card_header">
        <input type="text" readOnly={true} value={header} />
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
