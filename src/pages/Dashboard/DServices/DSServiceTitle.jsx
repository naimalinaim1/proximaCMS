import React, { useContext } from "react";
import { DSServiceContext } from "./DServices";

const DSServiceTitle = () => {
  const { services, changeSectionTitle } = useContext(DSServiceContext);

  return (
    <>
      <div className="flex flex-col space-y-4 w-[98%]  border border-gray-200 p-7 rounded-lg mb-6">
        <h3 className="text-2xl font-bold pb-2">Customize Section Title</h3>
        {/* title */}
        <label className="text-lg font-medium">Section Title</label>
        <input
          type="text"
          defaultValue={services.title}
          onChange={changeSectionTitle}
          spellCheck="false"
          placeholder="Section Title"
          className="p-2 border rounded-md"
        />
      </div>
    </>
  );
};

export default DSServiceTitle;
