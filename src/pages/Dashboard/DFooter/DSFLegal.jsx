import React, { useContext } from "react";
import { DSFContext } from "./DFooter";
import DFLinks from "./DFLinks/DFLinks";

const DSFLegal = () => {
  const { footer, changeLegalTitle } = useContext(DSFContext);

  return (
    <div>
      {/* change services */}
      <div className="border rounded p-4 flex flex-col space-y-4">
        <label className="text-lg font-medium">
          Change {footer?.footerLinks[2]?.linkTitle} Title
        </label>
        <input
          type="text"
          defaultValue={footer?.footerLinks[2]?.linkTitle}
          onChange={changeLegalTitle}
          spellCheck="false"
          placeholder="change title"
          className="p-2 border rounded-md"
        />
        <label className="text-sm font-medium">Change Link</label>
        {/* create new link and delete link setting */}
        {footer?.footerLinks[2]?.linkNames?.map((linkName, idx) => (
          <DFLinks
            key={idx}
            arrayIndex={2}
            index={idx}
            name={linkName}
            action={footer?.footerLinks[2]?.linkActions[idx]}
          />
        ))}
      </div>
    </div>
  );
};

export default DSFLegal;
