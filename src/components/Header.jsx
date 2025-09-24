import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;