import React, { useContext, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b w-[96%] max-w-[1280px] mx-auto flex justify-between  py-6">
      <div className="md:flex justify-between items-center w-full">
        <div className="font-bold text-xl">Company Name</div>
        <nav
          className={` ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0 md:flex space-y-2 md:space-y-0 md:space-x-4`}
        >
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/services">Services</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          {user ? (
            <ActiveLink to="/logout">Logout</ActiveLink>
          ) : (
            <>
              <ActiveLink to="/login">Login</ActiveLink>
              <ActiveLink to="/register">Register</ActiveLink>
            </>
          )}
        </nav>
      </div>
      <h3
        onClick={handleToggleMenu}
        className="md:hidden text-xl font-bold cursor-pointer text-blue-600"
      >
        Menu
      </h3>
    </header>
  );
};

export default Header;
