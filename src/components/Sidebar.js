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
        <Link to="/" style={styles.link} onClick={clickHandler}>
          <h3>Trade Help</h3>
        </Link>
      </div>

      <ul className="sidebar_links">
        <li>
          <Link
            className="sidebar_link"
            to="/avg"
            style={styles.link}
            onClick={clickHandler}
          >
            <span className="sidebar_icon">
              <PiCalculatorThin />
            </span>
            <span> Stock Average Calc</span>
          </Link>
        </li>
        <li>
          <Link
            className="sidebar_link"
            to="/private-notes"
            style={styles.link}
            onClick={clickHandler}
          >
            <span className="sidebar_icon">
              <PiNotepad />
            </span>
            <span> Private Notes</span>
          </Link>
        </li>
        <li>
          <Link
            className="sidebar_link"
            to="/calendar"
            style={styles.link}
            onClick={clickHandler}
          >
            <span className="sidebar_icon">
              <PiCalendarDotLight />
            </span>
            <span> Trading Calendar</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "#494949",
  },
};

export default Sidebar;
