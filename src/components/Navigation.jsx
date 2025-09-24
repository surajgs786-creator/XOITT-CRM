
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faUser, faHeadset, faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", icon: faHome, label: "Home" },
  { to: "/leads", icon: faTasks, label: "Leads" },
  { to: "/tasks", icon: faTasks, label: "Tasks" },
  { to: "/contacts", icon: faUser, label: "Contacts" },
  { to: "/after-sales", icon: faHeadset, label: "Support" }
];

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-full bg-gray-800 text-white transition-all duration-300 ${collapsed ? "w-16" : "w-56"} flex flex-col sticky top-0 z-20`}
      style={{ minHeight: "100vh" }}
    >
      <button
        className="p-2 focus:outline-none hover:bg-gray-700 flex items-center justify-center"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
      >
        <FontAwesomeIcon icon={collapsed ? faBars : faChevronLeft} />
      </button>
      <nav className="flex flex-col gap-2 mt-4">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition-colors ${collapsed ? "justify-center" : ""}`}
          >
            <FontAwesomeIcon icon={link.icon} />
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Navigation;