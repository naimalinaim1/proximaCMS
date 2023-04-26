import React, { createContext, useEffect, useState } from "react";
import DSServices from "./DSServices";
import { getSaveServicesInfo, saveServices } from "../utilities";
import DSServiceTitle from "./DSServiceTitle";

export const DSServiceContext = createContext(null);

const DServices = () => {
  const makeService = getSaveServicesInfo();
  const [services, setServices] = useState(makeService);
  const [serviceItems, setServiceItems] = useState([]);
  const [editServiceItem, setEditServiceItem] = useState([]);

  // change service section title
  const changeSectionTitle = (e) => {
    const title = e.target.value;
    setServices({ ...services, title });
  };

  const changeServiceItem = (e, option) => {
    const value = e.target.value;
    const getEditIndex = editServiceItem[1] - 1;
    const allServices = services?.services;
    // get previous services
    const previousService = allServices[getEditIndex];
    previousService[option] = value;
    setServices((prevState) => ({
      ...prevState,
      services: allServices,
    }));
  };

  // change service title
  const changeServiceTitle = (e) => {
    changeServiceItem(e, "title");
  };

  // change service description
  const changeServiceDescription = (e) => {
    changeServiceItem(e, "description");
  };

  // change service description
  const changeServicePrice = (e) => {
    changeServiceItem(e, "price");
  };

  // change service description
  const changeServiceDuration = (e) => {
    changeServiceItem(e, "duration");
  };

  // change service description
  const changeServiceBtnName = (e) => {
    changeServiceItem(e, "btnName");
  };

  // const edit service
  const editService = (index) => {
    const findService = serviceItems.find((item) => item.id === index);
    setEditServiceItem([findService, index]);
  };

  // save services
  useEffect(() => {
    saveServices(services);
  }, [services]);

  useEffect(() => {
    setServiceItems(services.services);
  }, []);

  //   handle preview page
  const previewCode = () => {
    window.open("/preview", "_blank");
  };

  const DSServiceInfo = {
    services,
    editServiceItem: editServiceItem[0],
    changeSectionTitle,
    changeServiceTitle,
    changeServiceDescription,
    changeServicePrice,
    changeServiceDuration,
    changeServiceBtnName,
  };

  return (
    <>
      <div>
        <section className="w-[96%] max-w-[1100px] mx-auto mb-10">
          <h2 className="text-4xl font-bold text-center mt-14 mb-10">
            {services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* services */}
            {serviceItems &&
              serviceItems.map((item, index) => (
                <div key={index} className="card border">
                  <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-lg font-bold">{item.price}</span>
                        <span className="text-gray-500 text-sm ml-2">
                          {item.duration}
                        </span>
                      </div>
                      <button className="btn btn-info">{item.btnName}</button>
                    </div>
                    {/* edit service */}
                    <span
                      className="text-info hover:text-blue-500 cursor-pointer w-20"
                      onClick={() => editService(index + 1)}
                    >
                      Edit
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
      <div className="mt-12">
        <DSServiceContext.Provider value={DSServiceInfo}>
          <DSServiceTitle />
          {editServiceItem[0] ? (
            <DSServices />
          ) : (
            <p className="text-lg text-info font-medium  w-[98%]  border border-gray-200 p-7 rounded-lg mb-10">
              Please select a service and edit
            </p>
          )}
        </DSServiceContext.Provider>
        <button onClick={previewCode} className="btn btn-error mt-6">
          View code
        </button>
      </div>
    </>
  );
};

export default DServices;
