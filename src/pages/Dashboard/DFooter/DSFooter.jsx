import React, { useContext } from "react";
import { DSFContext } from "./DFooter";

const DSFooter = () => {
  const { footer, changeCompanyName, changeCompanySinceData } =
    useContext(DSFContext);

  const handleFooter = (e) => {
    e.preventDefault();
  };

  //   handle preview page
  const previewCode = () => {
    window.open("/preview", "_blank");
  };

  return (
    <>
      <form
        onSubmit={handleFooter}
        className="flex flex-col space-y-4 border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold pb-2">Customize Footer</h3>
        {/* footer */}
        <label className="text-lg font-medium">Company Name</label>
        <input
          type="text"
          defaultValue={footer?.companyName}
          onChange={changeCompanyName}
          spellCheck="false"
          placeholder="Company name"
          className="p-2 border rounded-md"
        />
        <label className="text-lg font-medium">Company Since</label>
        <input
          type="text"
          defaultValue={footer?.sinceDate}
          onChange={changeCompanySinceData}
          spellCheck="false"
          placeholder="Company since"
          className="p-2 border rounded-md"
        />

        {/* change services */}
        <div className="border rounded p-4 flex flex-col space-y-4">
          <label className="text-lg font-medium">Change Services</label>
          <input
            type="text"
            spellCheck="false"
            placeholder="change title"
            className="p-2 border rounded-md"
          />
          <label className="text-sm font-medium">Change Link</label>
          <div className="flex gap-4">
            <input
              type="text"
              autoComplete="off"
              name="linkName"
              placeholder="example: Home"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="linkUrl"
              autoComplete="off"
              placeholder="example: path"
              className="p-2 border rounded-md"
            />
            <button className="btn btn-info">Save</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </form>
      <button onClick={previewCode} className="btn btn-error mt-6">
        View code
      </button>
    </>
  );
};

export default DSFooter;
