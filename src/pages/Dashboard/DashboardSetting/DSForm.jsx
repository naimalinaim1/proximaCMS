import React, { useContext } from "react";
import { DFormContext } from "../DForm/DForm";

const DSForm = () => {
  const { setFormName, setButtonName, saveLocalStorage } =
    useContext(DFormContext);

  const handleForm = (e) => {
    e.preventDefault();
  };

  // change form name
  const changeFormName = (e) => {
    const name = e.target.value;
    setFormName(name);
  };
  // change button name
  const changeButtonName = (e) => {
    const name = e.target.value;
    setButtonName(name);
  };

  const saveAndRun = () => {
    saveLocalStorage();
    handleClick();
  };

  const saveCode = () => {
    saveLocalStorage();
  };

  //   handle preview page
  const handleClick = () => {
    window.open("/preview", "_blank");
  };

  return (
    <form
      onSubmit={handleForm}
      className="flex flex-col space-y-4 w-[90%] max-w-[600px] border border-gray-200 p-7 rounded-lg"
    >
      <h3 className="text-2xl font-bold pb-2">Customize Form</h3>
      <label className="text-lg font-medium">Form Name</label>
      <input
        type="text"
        name="formName"
        placeholder="App Login"
        onChange={changeFormName}
        className="p-2 border rounded-md"
      />
      <label className="text-lg font-medium">Button Name</label>
      <input
        type="text"
        name="buttonName"
        placeholder="Login"
        onChange={changeButtonName}
        className="p-2 border rounded-md"
      />
      <div>
        <button onClick={saveCode} className="btn btn-success mr-4">
          Save Code
        </button>
        <button onClick={saveAndRun} className="btn btn-error">
          Save and Run Code
        </button>
      </div>
    </form>
  );
};

export default DSForm;
