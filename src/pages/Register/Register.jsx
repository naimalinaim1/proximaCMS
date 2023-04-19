import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
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
