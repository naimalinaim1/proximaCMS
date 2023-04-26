import React, { useContext } from "react";
import { DSServiceContext } from "./DServices";

const DSServices = () => {
  const {
    editServiceItem,
    changeServiceTitle,
    changeServiceDescription,
    changeServicePrice,
    changeServiceDuration,
    changeServiceBtnName,
  } = useContext(DSServiceContext);

  return (
    <>
      <form className="flex flex-col space-y-4 w-[98%]  border border-gray-200 p-7 rounded-lg">
        <h3 className="text-2xl font-bold pb-2">Customize Services</h3>

        {/* paragraph */}
        <label className="text-lg font-medium">Service Title</label>
        <input
          type="text"
          defaultValue={editServiceItem?.title}
          onChange={changeServiceTitle}
          spellCheck="false"
          placeholder="Service title"
          className="p-2 border rounded-md"
        />

        {/* service description */}
        <label className="text-lg font-medium">Service Description</label>
        <textarea
          type="text"
          defaultValue={editServiceItem?.description}
          onChange={changeServiceDescription}
          rows={6}
          spellCheck="false"
          placeholder="Service Description"
          className="p-2 border rounded-md"
        ></textarea>

        {/* service price */}
        <label className="text-lg font-medium">Service Price</label>
        <input
          type="text"
          defaultValue={editServiceItem?.price}
          onChange={changeServicePrice}
          spellCheck="false"
          placeholder="Service Price"
          className="p-2 border rounded-md"
        />

        {/* service duration */}
        <label className="text-lg font-medium">Service Duration</label>
        <input
          type="text"
          defaultValue={editServiceItem?.duration}
          onChange={changeServiceDuration}
          spellCheck="false"
          placeholder="Service Duration"
          className="p-2 border rounded-md"
        />

        {/* button name */}
        <label className="text-lg font-medium">Button Name</label>
        <input
          type="text"
          defaultValue={editServiceItem?.btnName}
          onChange={changeServiceBtnName}
          placeholder="Button Name"
          className="p-2 border rounded-md"
        />
      </form>
    </>
  );
};

export default DSServices;
