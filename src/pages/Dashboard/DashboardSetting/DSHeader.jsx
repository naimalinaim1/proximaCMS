import React, { useContext, useState } from "react";
import { DSHContext } from "../DHeader/DHeader";
import { Link } from "react-router-dom";

const DSHeader = () => {
  const {
    changeCompanyName,
    createLinkName,
    setLinkAddress,
    addNewLink,
    saveLocalStorage,
  } = useContext(DSHContext);

  const handleDSHeader = (e) => {
    e.preventDefault();
  };

  const saveAndRun = () => {
    saveLocalStorage();
    handleClick();
  };

  //   handle preview page
  const handleClick = () => {
    window.open("/preview", "_blank");
  };

  return (
    <form
      onSubmit={handleDSHeader}
      className="flex flex-col space-y-4 w-[90%] max-w-[600px] border border-gray-200 p-7 rounded-lg"
    >
      <h3 className="text-2xl font-bold pb-2">Customize Header</h3>
      <label className="text-lg font-medium">Company Name</label>
      <input
        type="text"
        onChange={changeCompanyName}
        name="companyName"
        placeholder="Company name"
        className="p-2 border rounded-md"
      />
      <label className="text-lg font-medium">Link</label>
      <div className="pb-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="linkName"
            placeholder="example: Home"
            onChange={createLinkName}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            name="linkUrl"
            onChange={setLinkAddress}
            placeholder="example: /home"
            className="p-2 border rounded-md"
          />
          <button className="btn btn-info" onClick={addNewLink}>
            Add New
          </button>
        </div>
      </div>
      <div>
        <button onClick={saveAndRun} className="btn btn-error">
          Save and Run Code
        </button>
      </div>
    </form>
  );
};

export default DSHeader;
