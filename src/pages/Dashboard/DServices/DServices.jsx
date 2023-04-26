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
                      onClick={() => navigate(`${`editService/${index}`}`)}
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
        </DSServiceContext.Provider>
        <button onClick={previewCode} className="btn btn-error mt-6">
          View code
        </button>
      </div>
    </>
  );
};

export default DServices;
