import React, { useContext } from "react";
import { DSFContext } from "./DFooter";
import DFLinks from "./DFLinks/DFLinks";

const DSFCompany = () => {
  const { footer, changeCompanyTitle } = useContext(DSFContext);

  return (
    <div>
      {/* change services */}
      <div className="border rounded p-4 flex flex-col space-y-4">
        <label className="text-lg font-medium">
          Change {footer?.footerLinks[1]?.linkTitle} Title
        </label>
        <input
          type="text"
          defaultValue={footer?.footerLinks[1]?.linkTitle}
          onChange={changeCompanyTitle}
          spellCheck="false"
          placeholder="change title"
          className="p-2 border rounded-md"
        />
        <label className="text-sm font-medium">Change Link</label>
        {/* create new link and delete link setting */}
        {footer?.footerLinks[1]?.linkNames?.map((linkName, idx) => (
          <DFLinks
            key={idx}
            arrayIndex={1}
            index={idx}
            name={linkName}
            action={footer?.footerLinks[1]?.linkActions[idx]}
          />
        ))}
      </div>
    </div>
  );
};

export default DSFCompany;
