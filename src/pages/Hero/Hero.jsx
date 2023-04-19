import React from "react";

const Hero = () => {
  return (
    <section className="mt-8 py-8 grid gap-5 grid-cols-12 justify-between">
      <div className="col-span-4">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full object-cover mr-4"
            src="https://via.placeholder.com/150"
            alt="User avatar"
          />
          <div>
            <h2 className="text-2xl font-bold">Hello, User!</h2>
            <p className="text-gray-600">Welcome to our website.</p>
          </div>
        </div>
      </div>
      <div className="col-span-8">
        <div className="pr-4">
          <h1 className="text-4xl font-bold mb-4">Discover Our Services</h1>
          <p className="text-lg mb-8 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor.
            Nullam quis cursus dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem cupiditate modi sequi sapiente id, porro quas ut at
            possimus debitis?
          </p>
          <p className="text-lg mb-8 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor.
            Nullam quis cursus dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem cupiditate modi sequi sapiente id, porro quas ut at
            possimus debitis?
          </p>
          <p className="text-lg mb-8 text-gray-600 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            eu lorem et ultricies. In porta lorem at dui semper porttitor.
            Nullam quis cursus dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem cupiditate modi sequi sapiente id, porro quas ut at
            possimus debitis?
          </p>
          <button className="btn btn-primary" size="large">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
