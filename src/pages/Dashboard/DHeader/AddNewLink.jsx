import React from "react";
import { useState } from "react";
import { DSHContext } from "./DHeader";
import { useContext } from "react";

const AddNewLink = ({ index, name, address }) => {
  const { deleteLink, changeLinkName } = useContext(DSHContext);

  const [linkName, setLinkName] = useState(name);
  const [linkAddress, setLinkAddress] = useState(address);

  const saveNewLink = () => {
    changeLinkName(index, linkName, linkAddress);
  };

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={linkName}
        onChange={(e) => setLinkName(e.target.value)}
        autoComplete="off"
        name="linkName"
        placeholder="example: Home"
        className="p-2 border rounded-md"
      />
      <input
        type="text"
        name="linkUrl"
        defaultValue={linkAddress}
        onChange={(e) => setLinkAddress(e.target.value)}
        autoComplete="off"
        placeholder="example: path"
        className="p-2 border rounded-md"
      />
      <button onClick={saveNewLink} className="btn btn-info">
        Save
      </button>
      <button onClick={() => deleteLink(index)} className="btn btn-error">
        Delete
      </button>
    </div>
  );
};

export default AddNewLink;
