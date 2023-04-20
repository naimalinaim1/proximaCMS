import React from "react";
import Hero from "../Hero/Hero";
import { Navigate, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[96%] max-w-[1280px] mx-auto">
      <section className="mt-8 py-8 grid gap-5 grid-cols-12 justify-between">
        <div className="col-span-12 md:col-span-4">
          <Hero />
        </div>
        <div className="col-span-12 mt-6 md:mt-0 md:col-span-8 ">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Home;
