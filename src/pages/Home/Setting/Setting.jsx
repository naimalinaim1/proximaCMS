import React, { useState } from "react";

const Setting = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make API request to delete user account
    // ...

    // Reset form
    setPassword("");
    setErrorMessage("");
  };

  return (
    <form className="max-w-[80%]  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Delete Account</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <div className="mb-4">
        <p className="mb-2">
          Are you sure you want to delete your account? This action cannot be
          undone.
        </p>
        <label htmlFor="password" className="block font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border border-gray-400 rounded-lg"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          onClick={handleSubmit}
        >
          Delete Account
        </button>
      </div>
    </form>
  );
};

export default Setting;
