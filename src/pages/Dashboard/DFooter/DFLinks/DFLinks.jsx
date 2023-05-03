import React, { useContext } from "react";
import { DSFContext } from "../DFooter";

const DFLinks = ({ arrayIndex, index, name, action }) => {
  const { changeFooterLink } = useContext(DSFContext);

  const handleLink = (e) => {
    changeFooterLink(arrayIndex, index, e.target.name, e.target.value);
  };

  return (
    <form onChange={handleLink} className="flex gap-4">
      <input
        type="text"
        name="linkNames"
        defaultValue={name}
        placeholder="example: Home"
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        name="linkActions"
        defaultValue={action}
        placeholder="example: path"
        className="p-2 border rounded-md"
      />
      <button className="btn btn-info">Save</button>
      <button className="btn btn-error">Delete</button>
    </form>
  );
};

export default DFLinks;
