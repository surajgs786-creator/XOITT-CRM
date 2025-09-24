import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">{title}</h1>
      <button className="text-white">
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;