import React, { useContext } from "react";
import { DSFContext } from "../DFooter";

const DFLinks = ({ arrayIndex, index, name, action }) => {
  const { changeFooterLink, deleteFooterLink } = useContext(DSFContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // change link name and action
  const handleLink = (e) => {
    changeFooterLink(arrayIndex, index, e.target.name, e.target.value);
  };

  const deleteLink = () => {
    deleteFooterLink(arrayIndex, index);
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleLink} className="flex gap-4">
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
      <p onClick={deleteLink} className="btn btn-error">
        Delete
      </p>
    </form>
  );
};

export default DFLinks;
