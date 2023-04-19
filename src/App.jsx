import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h3>app</h3>
      <Outlet />
    </div>
  );
};

export default App;
