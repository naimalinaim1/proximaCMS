import React, { useContext } from "react";
import RightNav from "../Shared/RightNav/RightNav";
import { AuthContext } from "../../provider/AuthProvider";

const Hero = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;

  const img = photoURL || "https://via.placeholder.com/150";

  return (
    <>
      <div className="col-span-4">
        {/* user information */}
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
        {/* right side nav link */}
        <div className="mt-8 border w-[80%] p-2 rounded">
          <RightNav />
        </div>
      </div>
    </>
  );
};

export default Hero;
