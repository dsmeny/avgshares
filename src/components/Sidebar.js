import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import {
  PiCalculatorThin,
  PiNotepad,
  PiCalendarDotLight,
} from "react-icons/pi";

const Sidebar = ({ clickHandler }) => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <FiX onClick={clickHandler} className="sidebar-close" />
        <Link to="/" onClick={clickHandler}>
          <h3>Trade Help</h3>
        </Link>
      </div>

      <ul className="sidebar_links">
        <li>
          <Link className="sidebar_link" to="/avg" onClick={clickHandler}>
            <PiCalculatorThin className="sidebar_icon" />
            Stock Average Calc
          </Link>
        </li>
        <li>
          <Link
            className="sidebar_link"
            to="/private-notes"
            onClick={clickHandler}
          >
            <PiNotepad className="sidebar_icon" />
            Private Notes
          </Link>
        </li>
        <li>
          <Link className="sidebar_link" to="/calendar" onClick={clickHandler}>
            <PiCalendarDotLight className="sidebar_icon" />
            Trading Calendar
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
