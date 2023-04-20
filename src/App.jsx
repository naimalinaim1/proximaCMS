import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
