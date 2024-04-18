import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, updateUser } from "../redux/user/userSlice";

const EditUser = () => {
  const { id } = useParams();
  const { editData } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(editUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (editData) {
      setUserData(editData);
    }
  }, [editData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    if (userData) {
      navigate("/");
      dispatch(updateUser(userData));
    }
  };

  console.log(userData);

  return (
    <>
      {userData && (
        <div className="w-full h-screen bg-white">
          <div
            className="w-full h-full flex justify-center items-center bg-black/50"
            style={{
              backgroundImage: `url("https://wallpapers.com/images/hd/office-background-radf1ashpkt1ri23.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-gray-500/50 rounded-lg w-[50%] h-[70%] flex flex-col gap-6 justify-center items-center">
              <div>
                <h1 className="text-3xl font-serif text-[#00165A]">
                  Edit User
                </h1>
              </div>
              <input
                className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                type="text"
                value={userData.id}
                name="id"
                readOnly
              />
              <input
                className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                type="text"
                placeholder="Enter your first name"
                name="first_name"
                onChange={handleInputChange}
                value={userData.first_name}
              />
              <input
                className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                type="text"
                placeholder="Enter your last name"
                name="last_name"
                onChange={handleInputChange}
                value={userData.last_name}
              />
              <input
                className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                type="text"
                placeholder="Enter Your Email "
                name="email"
                onChange={handleInputChange}
                value={userData.email}
              />
              <img src={userData.avatar} alt=""  className="w-24 h-24 object-cover"/>

              <div className="w-[60%]">
                <button
                  className="w-full rounded-lg text-white p-2 bg-green-600"
                  onClick={handleSubmit}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditUser;
