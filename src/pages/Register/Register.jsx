import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be 6 character...");
      return;
    }

    // clear previous error
    setError("");

    // create  user
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // user profile update
        updateProfile(user, {
          displayName: name,
          photoURL: "https://via.placeholder.com/150",
        })
          .then(() => {
            // go to home page
            navigate("/");
          })
          .catch((e) => {
            setError(e.message);
          });
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="flex flex-col space-y-4 w-[90%] max-w-[550px] border border-gray-200 p-7 rounded-lg"
      >
        <h3 className="text-2xl font-bold text-center border-b pb-2">
          App Register
        </h3>
        <label className="text-lg font-medium">Name:</label>
        <input
          type="text"
          name="name"
          className="p-2 border rounded-md"
          required
        />
        <label className="text-lg font-medium">Email:</label>
        <input
          type="email"
          name="email"
          className="p-2 border rounded-md"
          required
        />
        <label className="text-lg font-medium">Password:</label>
        <input
          type="password"
          name="password"
          className="p-2 border rounded-md"
          required
        />
        <input value="Register" type="submit" className="btn btn-primary" />

        {/* show  error message */}
        <p className="mt-2 text-center text-red-400">{error}</p>

        {/* user redirect login page */}
        <div>
          <p className="mt-2 border border-gray-300 p-2 rounded text-center">
            Already Register{" "}
            <Link to="/login" className="text-blue-500">
              Go to login
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
