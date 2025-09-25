import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faUser, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 border-t border-zinc-200 bg-background-light/90 pb-4 pt-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-background-dark/90">
      <nav className="flex justify-around">
        <Link
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} className="text-lg" />
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          to="/leads"
        >
          <FontAwesomeIcon icon={faTasks} className="text-lg" />
          <span className="text-xs font-medium">Leads</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          to="/contacts"
        >
          <FontAwesomeIcon icon={faUser} className="text-lg" />
          <span className="text-xs font-medium">Contacts</span>
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          to="/after-sales"
        >
          <FontAwesomeIcon icon={faHeadset} className="text-lg" />
          <span className="text-xs font-medium">Sales</span>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;