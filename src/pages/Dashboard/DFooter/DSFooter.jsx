import React, { useContext, useState } from "react";
import { DSFContext } from "./DFooter";
import DSFService from "./DSFService";
import DSFCommon from "./DSFCommon";

const DSFooter = () => {
  const { footer } = useContext(DSFContext);
  const [workId, setWorkId] = useState(0);
  const workFile = [<DSFCommon />, <DSFService />];

  //   handle preview page
  const previewCode = () => {
    window.open("/preview", "_blank");
  };

  return (
    <>
      <h3 className="text-2xl font-bold pb-2 mt-8">Customize Footer</h3>
      <div className="space-x-2">
        <button
          onClick={() => setWorkId(0)}
          className={`btn btn-info ${workId === 0 && "bg-gray-500 border-0"}`}
        >
          Customize Footer
        </button>
        <button
          onClick={() => setWorkId(1)}
          className={`btn btn-info ${workId === 1 && "bg-gray-500 border-0"}`}
        >
          Customize {footer?.footerLinks[0]?.linkTitle}
        </button>
        <button
          onClick={() => setWorkId(2)}
          className={`btn btn-info ${workId === 2 && "bg-gray-500 border-0"}`}
        >
          Customize {footer?.footerLinks[1]?.linkTitle}
        </button>
        <button
          onClick={() => setWorkId(3)}
          className={`btn btn-info ${workId === 3 && "bg-gray-500 border-0"}`}
        >
          Customize {footer?.footerLinks[2]?.linkTitle}
        </button>
      </div>
      <div className="mt-6">{workFile[workId]}</div>
      <button onClick={previewCode} className="btn btn-error mt-6">
        View code
      </button>
    </>
  );
};

export default DSFooter;
