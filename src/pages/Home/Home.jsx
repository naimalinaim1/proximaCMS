import React from "react";
import Hero from "../Hero/Hero";
import { Navigate, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-[96%] max-w-[1280px] mx-auto">
      <section className="mt-8 py-8 grid gap-5 grid-cols-12 justify-between">
        <Hero />
        <div className="col-span-8">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Home;
