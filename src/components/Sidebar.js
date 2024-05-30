import React from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Sidebar = ({ clickHandler }) => {
  return (
    <div className="sidebar">
      <FiX onClick={clickHandler} className="sidebar-close" />
      <Link to="/" style={styles.link} onClick={clickHandler}>
        <h3>Trade Help</h3>
      </Link>

      <ul>
        <li>
          <Link to="/avg" style={styles.link} onClick={clickHandler}>
            Stock Average Calc
          </Link>
        </li>
        <li>
          <Link to="/private-notes" style={styles.link} onClick={clickHandler}>
            Private Notes
          </Link>
        </li>
        <li>
          <Link to="/calendar" style={styles.link} onClick={clickHandler}>
            Trading Calendar
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
