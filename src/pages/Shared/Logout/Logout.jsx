import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { singOutUser } = useContext(AuthContext);

  useEffect(() => {
    singOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-medium">Logout</h2>
      <p className="text-red-500">{error}</p>
      <p>Try Again</p>
    </div>
  );
};

export default Logout;
