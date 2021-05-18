import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span> Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span> Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span> Inbox</span>
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">Projects will be here</ul>
      Add project component here
    </div>
  );
};
