import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { saveServices } from "../utilities";

const DSServices = () => {
  const [defaultServices, id] = useLoaderData();
  const [services, setServices] = useState(defaultServices);

  const changeServices = (e, option) => {
    const newServices = [...services.services];
    newServices[id] = { ...newServices[id], [option]: e.target.value };
    setServices({ ...services, services: newServices });
  };

  // save services
  useEffect(() => {
    saveServices(services);
  }, [services]);

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
      <div className="card border">
        <div className="card-body">
          <h3 className="card-title">{services.services[id].title}</h3>
          <p className="card-text">{services.services[id].description}</p>
          <div className="flex items-center justify-between mt-4">
            <div>
              <span className="text-lg font-bold">
                {services.services[id].price}
              </span>
              <span className="text-gray-500 text-sm ml-2">
                {services.services[id].duration}
              </span>
            </div>
            <button className="btn btn-info">
              {services.services[id].btnName}
            </button>
          </div>
        </div>
      </div>

      <form className="mt-10 flex flex-col space-y-4 w-[98%]  border border-gray-200 p-7 rounded-lg">
        <h3 className="text-2xl font-bold pb-2">Customize Services</h3>

        {/* paragraph */}
        <label className="text-lg font-medium">Service Title</label>
        <input
          type="text"
          defaultValue={services.services[id].title}
          onChange={changeServiceTitle}
          spellCheck="false"
          placeholder="Service title"
          className="p-2 border rounded-md"
        />

        {/* service description */}
        <label className="text-lg font-medium">Service Description</label>
        <textarea
          type="text"
          defaultValue={services.services[id].description}
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
          defaultValue={services.services[id].price}
          onChange={changeServicePrice}
          spellCheck="false"
          placeholder="Service Price"
          className="p-2 border rounded-md"
        />

        {/* service duration */}
        <label className="text-lg font-medium">Service Duration</label>
        <input
          type="text"
          defaultValue={services.services[id].duration}
          onChange={changeServiceDuration}
          spellCheck="false"
          placeholder="Service Duration"
          className="p-2 border rounded-md"
        />

        {/* button name */}
        <label className="text-lg font-medium">Button Name</label>
        <input
          type="text"
          defaultValue={services.services[id].btnName}
          onChange={changeServiceBtnName}
          placeholder="Button Name"
          className="p-2 border rounded-md"
        />
      </form>
      <Link to="/dashboard/services">
        <button className="btn btn-info mt-6">Go Back</button>
      </Link>
    </>
  );
};

export default DSServices;
