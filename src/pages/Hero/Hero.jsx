import React, { useContext, useState } from "react";
import RightNav from "../Shared/RightNav/RightNav";
import { AuthContext } from "../../provider/AuthProvider";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;

  const img = photoURL || "https://via.placeholder.com/150";

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* user information */}
      <div className="flex justify-between items-center md:block">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full object-cover mr-4"
            src={img}
            alt={displayName}
          />
          <div>
            <h2 className="text-2xl font-bold">Hello, {displayName}!</h2>
            <p className="text-gray-600">Welcome to our website.</p>
          </div>
        </div>
        <h3
          onClick={handleToggleMenu}
          className="md:hidden text-xl font-bold cursor-pointer text-blue-600"
        >
          Menu
        </h3>
      </div>
      {/* right side nav link */}
      <div
        className={`mt-8 border ${
          isOpen ? "block" : "hidden"
        }  md:block md:w-[80%] p-2 rounded`}
      >
        <RightNav />
      </div>
    </>
  );
};

export default Hero;
