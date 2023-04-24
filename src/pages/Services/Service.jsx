import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card border">
      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-text">{service.description}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold">{service.price}</span>
            <span className="text-gray-500 text-sm ml-2">
              {service.duration}
            </span>
          </div>
          <button className="btn btn-info">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
