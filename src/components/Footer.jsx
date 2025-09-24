import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faAddressBook, faCog } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 border-t border-zinc-200 bg-background-light/90 pb-4 pt-2 backdrop-blur-sm dark:border-zinc-800 dark:bg-background-dark/90">
      <nav className="flex justify-around">
        <a
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          href="#"
        >
          <FontAwesomeIcon icon={faHome} className="text-lg" />
          <span className="text-xs font-medium">Home</span>
        </a>
        <a
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          href="#"
        >
          <FontAwesomeIcon icon={faUsers} className="text-lg" />
          <span className="text-xs font-medium">Leads</span>
        </a>
        <a
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          href="#"
        >
          <FontAwesomeIcon icon={faAddressBook} className="text-lg" />
          <span className="text-xs font-medium">Contacts</span>
        </a>
        <a
          className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-primary dark:hover:text-primary"
          href="#"
        >
          <FontAwesomeIcon icon={faCog} className="text-lg" />
          <span className="text-xs font-medium">Settings</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;