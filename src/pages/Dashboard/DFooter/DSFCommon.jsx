import React, { useContext } from "react";
import { DSFContext } from "./DFooter";

const DSFCommon = () => {
  const { footer, changeCompanyName, changeCompanySinceData } =
    useContext(DSFContext);
  return (
    <div className="flex flex-col space-y-4 border border-gray-200 p-7 rounded-lg">
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
    </div>
  );
};

export default DSFCommon;
