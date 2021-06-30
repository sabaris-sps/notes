import React from "react";
import { MdSkipPrevious } from "react-icons/md";

const Header = ({ handleToggleMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
