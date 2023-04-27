import React, { useContext } from "react";
import { DBSContext } from "./DBanner";

const DSBanner = () => {
  const { banner, changeForm } = useContext(DBSContext);

  //   handle preview page
  const previewCode = () => {
    window.open("/preview", "_blank");
  };

  return (
    <>
      <form
        onChange={changeForm}
        className="flex flex-col space-y-4 w-[98%]  border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold pb-2">Customize Banner</h3>
        {/* title */}
        <label className="text-lg font-medium">Banner Title</label>
        <input
          type="text"
          defaultValue={banner?.title}
          spellCheck="false"
          name="title"
          placeholder="Banner title"
          className="p-2 border rounded-md"
        />

        {/* description */}
        <label className="text-lg font-medium">Banner Description</label>
        <input
          type="text"
          name="description"
          defaultValue={banner?.description}
          autoComplete="off"
          spellCheck="false"
          placeholder="Banner Description"
          className="p-2 border rounded-md"
        />

        {/* button name */}
        <label className="text-lg font-medium">Button Name</label>
        <label className="text-sm font-medium">First Button Name</label>
        <input
          type="text"
          name="btnName1"
          defaultValue={banner?.btnName[0]}
          placeholder="Button Name"
          className="p-2 border rounded-md"
        />

        {/* button name */}
        <label className="text-sm font-medium">Second Button Name</label>
        <input
          type="text"
          name="btnName2"
          defaultValue={banner?.btnName[1]}
          placeholder="Button Name"
          className="p-2 border rounded-md"
        />

        {/* button name */}
        <label className="text-lg font-medium">Banner Image Or URL</label>
        <input
          type="text"
          name="image"
          defaultValue={banner?.image}
          placeholder="Banner image name or url"
          className="p-2 border rounded-md"
        />
      </form>
      <button onClick={previewCode} className="btn btn-error mt-6">
        View code
      </button>
    </>
  );
};

export default DSBanner;
