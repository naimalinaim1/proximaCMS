import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Profile = () => {
  const [error, setError] = useState("");

  const { user, updateUserProfile } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  console.log(updateUserProfile);

  const img = photoURL || "https://via.placeholder.com/150";
  const address = "Dhaka";
  const phone = "01852165392";

  //   update user profile
  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imgUrl = form.imageUrl.value || img;

    // some error
    // updateUserProfile(name, imgUrl)
    //   .then(() => {
    //     alert("profile update successful");
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setError(e.message);
    //   });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        {/* user information */}
        <div>
          <div className="flex items-center space-x-4">
            <img
              src={img}
              alt="Profile Picture"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">{displayName}</h1>
              <p className="text-gray-500">{email}</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm font-semibold text-gray-500">Address</h2>
              <p className="text-gray-600">{address}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-500">Phone</h2>
              <p className="text-gray-600">{phone}</p>
            </div>
          </div>
        </div>

        {/* update profile */}
        <form
          onSubmit={handleUpdateUserProfile}
          className="flex flex-col space-y-4 w-[90%] max-w-[550px] mt-16"
        >
          <p className="font-medium">Update Profile</p>
          <label className="text-sm text-gray-500 font-medium">
            Change Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="p-2 border rounded-md"
            required
          />

          <label className="text-sm text-gray-500 font-medium">
            Change Photo Url:
          </label>
          <input
            type="url"
            name="imageUrl"
            placeholder="http://www.example.com/image.jpg"
            className="p-2 border rounded-md"
          />

          <input
            value="Update Profile"
            type="submit"
            className="btn-disabled btn btn-info text-white"
          />

          {/* show  error message */}
          <p className="mt-2 text-center text-red-400">{error}</p>
        </form>
      </div>
    </>
  );
};

export default Profile;
