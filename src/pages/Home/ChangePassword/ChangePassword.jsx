import { useState } from "react";

const ChangePassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handlePasswordChange = (e) => {
    const form = e.target;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmNewPassword = form.conNewPassword.value;

    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    // Make API request to change password
    // ...

    form.reset();
    setErrorMessage("");
  };

  return (
    <form
      onSubmit={handlePasswordChange}
      className="max-w-[80%] p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <div className="mb-4">
        <label htmlFor="current-password" className="block font-medium mb-2">
          Current Password
        </label>
        <input
          type="password"
          id="current-password"
          className="w-full px-3 py-2 border border-gray-400 rounded-lg"
          name="currentPassword"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="new-password" className="block font-medium mb-2">
          New Password
        </label>
        <input
          type="password"
          id="new-password"
          className="w-full px-3 py-2 border border-gray-400 rounded-lg"
          name="newPassword"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirm-new-password"
          className="block font-medium mb-2"
        >
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirm-new-password"
          className="w-full px-3 py-2 border border-gray-400 rounded-lg"
          name="conNewPassword"
          required
        />
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 cursor-pointer"
          value="Change Password"
        />
      </div>
    </form>
  );
};

export default ChangePassword;
