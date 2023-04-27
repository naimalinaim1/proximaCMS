import React, { createContext, useEffect, useState } from "react";
import { getSaveServicesInfo, saveServices } from "../utilities";
import DSServiceTitle from "./DSServiceTitle";
import { useNavigate } from "react-router-dom";

export const DSServiceContext = createContext(null);

const DServices = () => {
  const navigate = useNavigate();

  const makeService = getSaveServicesInfo();
  const [services, setServices] = useState(makeService);
  const [serviceItems, setServiceItems] = useState([]);

  // change service section title
  const changeSectionTitle = (e) => {
    const title = e.target.value;
    setServices({ ...services, title });
  };

  // add new service
  const addNewService = () => {
    const id = (serviceItems[serviceItems.length - 1]?.id || 0) + 1;
    setServiceItems([
      ...serviceItems,
      {
        id,
        title: "Blank service title",
        description:
          "Service description.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto minus, quam saepe ipsam enim voluptatem repellat temporibus eum cum vitae nisi facilis provident, ullam harum aliquam adipisci eaque aperiam, hic optio possimus quaerat ad quod.",
        price: "$150/hour",
        duration: "1-2 weeks",
        btnName: "Explore",
      },
    ]);
  };

  const deleteService = (id) => {
    const isDelete = confirm(
      "Are you sure you want to delete this service item?"
    );

    // check delete
    if (!isDelete) {
      return;
    }

    const remainingService = services.services.filter(
      (itemId) => itemId.id !== id
    );
    setServiceItems(remainingService);
  };

  useEffect(() => {
    setServices((preState) => ({ ...preState, services: serviceItems }));
  }, [serviceItems]);

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
    changeSectionTitle,
  };

  return (
    <>
      <div>
        <section className="w-[96%] mx-auto mb-10">
          <h2 className="text-4xl font-bold text-center mt-14 mb-10">
            {services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* services */}
            {serviceItems &&
              serviceItems.map((item) => (
                <div key={item.id} className="card border">
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
                    {/* edit or delete service */}
                    <div className="flex gap-5">
                      <span
                        className="text-info hover:text-blue-500 cursor-pointer"
                        onClick={() => navigate(`${`editService/${item.id}`}`)}
                      >
                        Edit
                      </span>
                      <span
                        className="text-error hover:text-red-700 cursor-pointer"
                        onClick={() => deleteService(item.id)}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button onClick={addNewService} className="btn btn-info mt-6">
            Add New Service
          </button>
        </section>
      </div>
      <div className="mt-12">
        <DSServiceContext.Provider value={DSServiceInfo}>
          <DSServiceTitle />
        </DSServiceContext.Provider>
        <button onClick={previewCode} className="btn btn-error mt-6">
          View code
        </button>
      </div>
    </>
  );
};

export default DServices;
