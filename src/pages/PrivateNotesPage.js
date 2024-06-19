import { useEffect } from "react";
import useFilter from "../hooks/useFilter";
import useNotes from "../hooks/useNotes";
import { duplicateCard, deleteCard } from "../utils/messagesUtil";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import CardFilter from "../components/CardFilter";
import Filter from "../components/Filter";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const { functionsFilter, statesFilter, refsFilter } = useFilter();
  const { functionsNotes, statesNotes, refsNotes } = useNotes();

  const { refresh, toggleCardFilter, selectedOption } = functionsFilter;
  const { refreshComponent, showCardFilter, element } = statesFilter;
  const { filterRef } = refsFilter;

  const { fetchData, submitHandler, updateAndFetchData } = functionsNotes;
  const { messages } = statesNotes;
  const { notesFormRef } = refsNotes;

  useEffect(() => {
    updateAndFetchData();
  }, [refreshComponent]);

  return (
    <div className="container notes_container">
      <div className="notes_container_header">
        {showCardFilter && (
          <CardFilter
            filterRef={filterRef}
            selectedOption={selectedOption}
            toggleCardFilter={toggleCardFilter}
            element={element}
          />
        )}
        <NotesForm submitHandler={submitHandler} notesFormRef={notesFormRef} />
        {/* <Filter toggleCardFilter={toggleCardFilter} /> */}
      </div>
      <div className="notes_container_cards">
        <NoteCards
          messages={messages}
          removeCard={(id) => {
            deleteCard(id);
            refresh();
          }}
          duplicateCard={(id) => {
            duplicateCard(id, fetchData);
            refresh();
          }}
          refresh={refresh}
        />
      </div>
    </div>
  );
};

export default PrivateNotesPage;
