import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Sidebar = ({ clickHandler }) => {
  return (
    <div className="sidebar">
      <FiX onClick={clickHandler} className="sidebar-close" />
      <Link to="/" onClick={clickHandler}>
        <h3>Trade Help</h3>
      </Link>

      <ul>
        <li>
          <Link to="/avg" onClick={clickHandler}>
            Avg Stock Calc
          </Link>
        </li>
        <li>
          <Link to="/calendar" onClick={clickHandler}>
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/private-notes" onClick={clickHandler}>
            Private Notes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
