import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, updateUser } from "../redux/user/userSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { editUserSchema } from "../validation/yup";
import UploadImage from "./uploadImage";

const EditUser = () => {
  const { id } = useParams();
  const { editData } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(editUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (editData) {
      setUserData(editData);
      setImage(editData.avatar)
    }
  }, [editData]);

  // console.log(editData, "this is edit data");

  const handleSubmit = (values) => {
    console.log("this is values", values);
    dispatch(updateUser(values));
    navigate("/");
  };

  return (
    <>
      {userData && (
        <Formik
          initialValues={userData}
          validationSchema={editUserSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
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
                    <div className="w-full  flex flex-col  justify-center items-center">
                      <Field
                        className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        type="text"
                        name="id"
                        readOnly
                      />
                    </div>
                    <div className="w-full  flex flex-col  justify-center items-center">
                      <Field
                        className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        type="text"
                        placeholder="Enter your first name"
                        name="first_name"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                    <div className="w-full  flex flex-col  justify-center items-center">
                      <Field
                        className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        type="text"
                        placeholder="Enter your last name"
                        name="last_name"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                    <div className="w-full  flex flex-col  justify-center items-center">
                      <Field
                        className="appearance-none bg-white w-[60%] border border-gray-300 rounded-md py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-transparent"
                        type="text"
                        placeholder="Enter Your Email "
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                    <div className="w-full  flex flex-col  justify-center items-center">
                      <UploadImage
                        setError={setError}
                        setImage={setImage}
                        image={image}
                        setFieldValue={setFieldValue}
                      />
                      <p className="text-red-600">{error}</p>
                    </div>

                    <div className="w-[60%]">
                      <button
                        className="w-full rounded-lg text-white p-2 bg-green-600"
                        type="submit"
                      >
                        Add User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default EditUser;
