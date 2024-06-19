import { LuListFilter } from "react-icons/lu";

function Filter({ toggleCardFilter }) {
  return (
    <div className="notes_filter" onClick={toggleCardFilter}>
      <span>What comes first?</span>
      <LuListFilter />
    </div>
  );
}

export default Filter;
