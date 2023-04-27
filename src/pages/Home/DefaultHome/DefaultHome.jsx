import React from "react";
import { Link } from "react-router-dom";

const DefaultHome = () => {
  return (
    <div className="pr-4">
      <h1 className="text-4xl font-bold mb-4">Discover Our Services</h1>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>
      <p className="text-lg mb-8 text-gray-600 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
        lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
        cursus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        cupiditate modi sequi sapiente id, porro quas ut at possimus debitis?
      </p>
      <p className="text-lg mb-8 text-gray-600 text-justify font-medium">
        Please click 'Get Started' button and start your project
      </p>
      <Link to="/project-info">
        <button className="btn btn-info">Get Started</button>
      </Link>
    </div>
  );
};

export default DefaultHome;
