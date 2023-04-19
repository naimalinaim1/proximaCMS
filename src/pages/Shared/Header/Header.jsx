import React from "react";

import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <header className="border-b w-[96%] max-w-[1280px] mx-auto flex justify-between items-center py-6">
      <div className="font-bold text-xl">Company Name</div>
      <nav className="flex space-x-4">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/services">Services</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/register">Register</ActiveLink>
      </nav>
    </header>
  );
};

export default Header;
