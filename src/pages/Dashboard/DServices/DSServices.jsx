import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { saveServices } from "../utilities";

const DSServices = () => {
  const [defaultServices, id] = useLoaderData();
  const [allServices, setAllServices] = useState(defaultServices);
  const [editService, setEditService] = useState({});

  // load edit service
  useEffect(() => {
    const newServices = [...allServices.services];
    const findIndex = newServices.findIndex(
      (itemId) => itemId.id === parseInt(id)
    );
    const findService = newServices[findIndex];
    setEditService(findService);
  }, [allServices]);

  const changeServices = (e, option) => {
    const newServices = [...allServices.services];
    const findIndex = newServices.findIndex(
      (itemId) => itemId.id === parseInt(id)
    );
    newServices[findIndex] = {
      ...newServices[findIndex],
      [option]: e.target.value,
    };
    setAllServices({ ...allServices, services: newServices });
  };

  // save services
  useEffect(() => {
    saveServices(allServices);
  }, [allServices]);

  // change service title
  const changeServiceTitle = (e) => {
    changeServices(e, "title");
  };

  // change service description
  const changeServiceDescription = (e) => {
    changeServices(e, "description");
  };

  // change service description
  const changeServicePrice = (e) => {
    changeServices(e, "price");
  };

  // change service description
  const changeServiceDuration = (e) => {
    changeServices(e, "duration");
  };

  // change service description
  const changeServiceBtnName = (e) => {
    changeServices(e, "btnName");
  };

  return (
    <>
      {editService ? (
        <>
          <div className="card border">
            <div className="card-body">
              <h3 className="card-title">{editService?.title}</h3>
              <p className="card-text">{editService?.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-lg font-bold">
                    {editService?.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {editService?.duration}
                  </span>
                </div>
                <button className="btn btn-info">{editService?.btnName}</button>
              </div>
            </div>
          </div>

          <form className="mt-10 flex flex-col space-y-4 w-[98%]  border border-gray-200 p-7 rounded-lg">
            <h3 className="text-2xl font-bold pb-2">Customize Services</h3>

            {/* paragraph */}
            <label className="text-lg font-medium">Service Title</label>
            <input
              type="text"
              defaultValue={editService?.title}
              onChange={changeServiceTitle}
              spellCheck="false"
              placeholder="Service title"
              className="p-2 border rounded-md"
            />

            {/* service description */}
            <label className="text-lg font-medium">Service Description</label>
            <textarea
              type="text"
              defaultValue={editService?.description}
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
              defaultValue={editService?.price}
              onChange={changeServicePrice}
              spellCheck="false"
              placeholder="Service Price"
              className="p-2 border rounded-md"
            />

            {/* service duration */}
            <label className="text-lg font-medium">Service Duration</label>
            <input
              type="text"
              defaultValue={editService?.duration}
              onChange={changeServiceDuration}
              spellCheck="false"
              placeholder="Service Duration"
              className="p-2 border rounded-md"
            />

            {/* button name */}
            <label className="text-lg font-medium">Button Name</label>
            <input
              type="text"
              defaultValue={editService?.btnName}
              onChange={changeServiceBtnName}
              placeholder="Button Name"
              className="p-2 border rounded-md"
            />
          </form>
          <Link to="/dashboard/services">
            <button className="btn btn-info mt-6">Go Back</button>
          </Link>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl text-error font-bold">
            No Edit service found
          </h2>
          <Link to="/dashboard/services">
            <button className="btn btn-info mt-6">Go Back</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DSServices;
