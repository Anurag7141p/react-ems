import React, { useEffect, useState } from "react";
import PreviewImage from "./previewImage";
import { FaUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAddUser } from "../redux/user/userSlice";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { addUserSchema } from "../validation/yup";

const AddUser = () => {
  const [uploadImage, setUploadImage] =  useState(null);
  const [image, setImage] = useState(null);
  const [newId, setNewId] = useState(null);
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    id: newId,
    email: image,
    avatar: "",
    first_name: "",
    last_name: "",
  });

  // const initialValue = newUser;

  useEffect(() => {
    setNewId(users.length + 1);
  }, [users]);

  useEffect(() => {
    if (newId !== null) {
      setNewUser((prevUser) => ({ ...prevUser, id: newId }));
    }
  }, [newId]);

  useEffect(() => {
    if (image !== null) {
      setNewUser((prevUser) => ({ ...prevUser, avatar: image }));
    }
  }, [image]);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(setAddUser(newUser));
    navigate("/");
  };

  console.log(users);


  return (
    <>
      {/* <Formik
        validationSchema={addUserSchema}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        <Form> */}
          <div className="w-full h-screen bg-white ">
            <div
              className="w-full h-full flex justify-center items-center bg-black/50 "
              style={{
                backgroundImage: `url("https://wallpapers.com/images/hd/office-background-radf1ashpkt1ri23.jpg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-gray-500/50 rounded-lg w-[50%] min-h-[70%] py-10  gap-6  flex flex-col  justify-center items-center">
                <div>
                  <h1 className="text-3xl font-serif text-[#00165A]">
                    Add User
                  </h1>
                </div>
                <div className="w-full  flex flex-col  justify-center items-center">
                  <input
                    className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    type="text"
                    value={newUser.id}
                    name="id"
                    readOnly
                  />
                  {/* <ErrorMessage
                    name="id"
                    component="div"
                    className="text-red-600"
                  /> */}
                </div>
                <div className="w-full  flex flex-col  justify-center items-center">
                  <input
                    className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    type="text"
                    placeholder="Enter your first name"
                    name="first_name"
                    onChange={handleFieldChange}
                    value={newUser.first_name}
                  />
                  {/* <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-600"
                  /> */}
                </div>
                <div className="w-full  flex flex-col  justify-center items-center">
                  <input
                    className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    type="text"
                    placeholder="Enter your last name"
                    name="last_name"
                    onChange={handleFieldChange}
                    value={newUser.last_name}
                  />
                  {/* <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-600"
                  /> */}
                </div>
                <div className="w-full  flex flex-col  justify-center items-center">
                  <input
                    className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                    type="text"
                    placeholder="Enter Your Email "
                    name="email"
                    onChange={handleFieldChange}
                    value={newUser.email}
                  />
                  {/* <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600"
                  /> */}
                </div>
                <div className=" w-[60%] ">
                  <div className="flex gap-5 items-center w-1/2 rounded-md justify-around bg-[#00165A] text-white p-2">
                    <h5 className="text-sm">Upload image</h5>
                    <input
                      type="file"
                      id="uploadBtn"
                      name="category_image"
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => {
                        setUploadImage(e.target.files[0]);
                      }}
                    />
                    <label
                      htmlFor="uploadBtn"
                      className="bg-gray-200 px-6  rounded-full py-2 cursor-pointer"
                    >
                      <FaUpload className="text-[#00165A]" />
                    </label>
                  </div>
                </div>
                <div className="w-[60%]">
                  <PreviewImage file={uploadImage} setImage={setImage} />
                </div>
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
        {/* </Form>
      </Formik> */}
    </>
  );
};

export default AddUser;
