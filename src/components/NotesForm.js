import React from "react";

const NotesForm = ({ submitHandler, notesFormRef }) => {
  return (
    <form className="notes_form" onSubmit={submitHandler}>
      <input
        type="text"
        className="notes_form_message"
        placeholder="enter a private message."
        ref={notesFormRef}
      />
      <input type="submit" />
    </form>
  );
};

export default NotesForm;
