import React, { useContext, useState } from "react";
import { DSHContext } from "../DHeader/DHeader";
import AddNewLink from "./AddNewLink";

const DSHeader = () => {
  const { header, changeCompanyName, addNewLinkWithBtn } =
    useContext(DSHContext);

  // form
  const handleDSHeader = (e) => {
    e.preventDefault();
  };

  //   handle preview page
  const previewCode = () => {
    window.open("/preview", "_blank");
  };

  return (
    <>
      <form
        onSubmit={handleDSHeader}
        className="flex flex-col space-y-4 w-[90%] max-w-[650px] border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold pb-2">Customize Header</h3>
        <label className="text-lg font-medium">Company Name</label>
        <input
          type="text"
          defaultValue={header?.logoName}
          onChange={changeCompanyName}
          name="companyName"
          placeholder="Company name"
          className="p-2 border rounded-md"
        />
        <label className="text-lg font-medium">Link</label>
        <div className="pb-4 space-y-2">
          {header?.linkName?.map((name, index) => (
            <AddNewLink
              key={index}
              index={index}
              name={name}
              address={header?.linkAction[index]}
            />
          ))}
          {/* add new link */}
          <button className="btn btn-info mt-4" onClick={addNewLinkWithBtn}>
            Add New Link
          </button>
        </div>
      </form>
      <button onClick={previewCode} className="btn btn-error mt-6">
        View code
      </button>
    </>
  );
};

export default DSHeader;
