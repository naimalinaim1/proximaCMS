import React from "react";
import DashboardNav from "../Shared/DashboardNav/DashboardNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="w-[96%] max-w-[1280px] mx-auto">
      <div className="mt-8 py-8 grid gap-5 grid-cols-12 justify-between">
        <div className="col-span-12 md:col-span-3">
          <div className="border">
            <DashboardNav />
          </div>
        </div>
        <div className="col-span-12 mt-6 md:mt-0 md:col-span-9">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
