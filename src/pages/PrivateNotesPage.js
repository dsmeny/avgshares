import { useEffect } from "react";
import useFilter from "../hooks/useFilter";
import { duplicateCard, deleteCard } from "../utils/messagesUtil";
import NoteCards from "../components/NoteCards";
import NotesForm from "../components/NotesForm";
import CardFilter from "../components/CardFilter";
import Filter from "../components/Filter";
import "../styles/notes.css";

const PrivateNotesPage = () => {
  const { functions, state, refs } = useFilter();

  const {
    refresh,
    toggleCardFilter,
    selectedOption,
    fetchData,
    submitHandler,
    updateAndFetchData,
  } = functions;
  const { refreshComponent, showCardFilter, element, messages } = state;
  const { notesFormRef, filterRef } = refs;

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
        <Filter toggleCardFilter={toggleCardFilter} />
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
