import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faUser, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link to="/" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>
      <Link to="/tasks" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTasks} />
        <span>Tasks</span>
      </Link>
      <Link to="/contacts" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUser} />
        <span>Contacts</span>
      </Link>
      <Link to="/after-sales" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faHeadset} />
        <span>Support</span>
      </Link>
    </nav>
  );
};

export default Navigation;