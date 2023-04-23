import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const ChangePassword = () => {
  const [isShow, setIsShow] = useState(false);
  const { updateUserPassword } = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");
  const handlePasswordChange = (e) => {
    setErrorMessage("");

    const form = e.target;
    // const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmNewPassword = form.conNewPassword.value;

    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    // update user password
    updateUserPassword(newPassword)
      .then(() => {
        alert("Password update successfully");
      })
      .catch((e) => {
        setErrorMessage(e.message);
      });

    // reset form
    form.reset();
  };

  return (
    <form
      onSubmit={handlePasswordChange}
      className="sm:max-w-[80%] mx-auto md:mx-0 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <div className="mb-4">
        <label htmlFor="new-password" className="block font-medium mb-2">
          New Password
        </label>
        <input
          type={isShow ? "text" : "password"}
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
          type={isShow ? "text" : "password"}
          id="confirm-new-password"
          className="w-full px-3 py-2 border border-gray-400 rounded-lg"
          name="conNewPassword"
          required
        />
      </div>
      <p
        className="cursor-pointer font-semibold"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? "Hide" : "Show"} password
      </p>
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
