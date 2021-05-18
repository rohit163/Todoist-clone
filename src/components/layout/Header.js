import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <ul>
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </ul>
      </nav>
    </header>
  );
};
