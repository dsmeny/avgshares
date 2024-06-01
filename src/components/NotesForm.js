import React from "react";

const NotesForm = ({ submitHandler }) => {
  return (
    <form className="notes_form" onSubmit={submitHandler}>
      <input type="text" placeholder="enter a private message." />
      <input type="submit" />
    </form>
  );
};

export default NotesForm;
