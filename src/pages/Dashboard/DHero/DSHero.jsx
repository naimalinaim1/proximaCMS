import React, { useContext } from "react";
import { DSHeroContext } from "./DHero";

const DSHero = () => {
  const {
    hero,
    changeHeroTitle,
    changeDescription,
    changeButtonName,
    changeImage,
  } = useContext(DSHeroContext);

  // form default
  const handleDSHero = (e) => {
    e.preventDefault();
  };

  //   handle preview page
  const previewCode = () => {
    window.open("/preview", "_blank");
  };

  return (
    <>
      <form
        onSubmit={handleDSHero}
        className="flex flex-col space-y-4 w-[98%]  border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold pb-2">Customize Hero</h3>
        {/* title */}
        <label className="text-lg font-medium">Section Title</label>
        <input
          type="text"
          defaultValue={hero?.title.replace("&lt;", "<").replace("&gt;", ">")}
          onChange={changeHeroTitle}
          spellCheck="false"
          placeholder="Section Title"
          className="p-2 border rounded-md"
        />
        {/* paragraph */}
        <label className="text-lg font-medium">Section Description</label>
        <textarea
          type="text"
          rows={6}
          onChange={changeDescription}
          defaultValue={hero?.descriptions}
          spellCheck="false"
          placeholder="Section Description"
          className="p-2 border rounded-md"
        ></textarea>
        {/* button name */}
        <label className="text-lg font-medium">Button Name</label>
        <input
          type="text"
          defaultValue={hero?.btnName}
          onChange={changeButtonName}
          placeholder="Button Name"
          className="p-2 border rounded-md"
        />

        {/* image */}
        <label className="text-lg font-medium">Image Name or URL</label>
        <input
          type="text"
          defaultValue={hero?.image}
          onChange={changeImage}
          placeholder="Change Image"
          className="p-2 border rounded-md"
        />
      </form>
      <button onClick={previewCode} className="btn btn-error mt-6">
        View code
      </button>
    </>
  );
};

export default DSHero;
