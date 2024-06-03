import React from "react";
import { FaUpload } from "react-icons/fa";

const supportedImageExtensions = ["jpg", "jpeg", "png", "gif"];

const UploadImage = ({ setError, image, setImage, setFieldValue }) => {
  const UploadUserImage = (files) => {
    const file = files[0];
    const fileName = file.name.toLowerCase();
    const extension = fileName.split(".").pop();

    if (file.type.startsWith("image/")) {
      if (supportedImageExtensions.includes(extension)) {
        if (file.size <= 5 * 1024 * 1024) {
          setImage(URL.createObjectURL(file));
          setFieldValue("avatar", URL.createObjectURL(file));
          setError("");
        } else {
          setError("Image size should be less than 5MB");
        }
      } else {
        setError("Invalid image file extension");
      }
    } else {
      setError("File is not an image");
    }
  };

  // console.log(image);
  return (
    <>
      {image ? (
        <div className=" w-[60%] ">
          <div className="  items-center w-1/2 rounded-md justify-around  text-white ">
            {/* <div className=" h-fit w-full flex justify-start  ">
              <p className="font-semibold">Store Image</p>
            </div> */}
            <div className="w-full h-fit relative mb-3 ">
              <img
                className="w-full object-cover h-32 max-w-full"
                src={image}
                alt="posts"
              />
              <div className="  absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-90 hover:opacity-60 transition-opacity duration-300">
                <label
                  htmlFor="imageUpload"
                  className="text-white text-sm cursor-pointer"
                >
                  Replace Image
                  <input
                    type="file"
                    id="imageUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={(event) => {
                      UploadUserImage(event.target.files);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-[60%] ">
          <div className="flex gap-5 items-center w-1/2 rounded-md justify-around bg-[#00165A] text-white p-2">
            <h5 className="text-sm">Upload image</h5>
            <input
              type="file"
              id="uploadBtn"
              name="avatar"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                UploadUserImage(e.target.files);
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
      )}
    </>
  );
};

export default UploadImage;
