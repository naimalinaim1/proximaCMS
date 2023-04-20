import React, { createContext, useRef, useState } from "react";
import DSForm from "../DashboardSetting/DSForm";

export const DFormContext = createContext(null);

const DForm = () => {
  const [formName, setFormName] = useState("App Login");
  const [buttonName, setButtonName] = useState("Login");
  const formRef = useRef();

  const saveLocalStorage = () => {
    const getForm = formRef.current.innerHTML;
    localStorage.setItem("form", getForm);
  };

  const DFInfo = {
    setFormName,
    setButtonName,
    saveLocalStorage,
  };

  return (
    <div>
      <div ref={formRef}>
        <form className="flex flex-col space-y-4 w-[90%] max-w-[550px] mx-auto border border-gray-200 p-7 rounded-lg">
          <h3 className="text-2xl font-bold text-center border-b pb-2">
            {formName}
          </h3>
          <label className="text-lg font-medium">Email:</label>
          <input
            type="email"
            name="email"
            className="p-2 border rounded-md"
            required
          />
          <label className="text-lg font-medium">Password:</label>
          <input
            type="password"
            name="password"
            className="p-2 border rounded-md"
            required
          />
          <input value={buttonName} type="submit" className="btn btn-info" />
        </form>
      </div>
      <div className="mt-8">
        <DFormContext.Provider value={DFInfo}>
          <DSForm />
        </DFormContext.Provider>
      </div>
    </div>
  );
};

export default DForm;
