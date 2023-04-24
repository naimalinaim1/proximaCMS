import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="w-[90%] max-w-[1100px] mx-auto mb-10">
      <h2 className="text-4xl font-bold text-center mt-14 mb-10">
        Explore Our Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
