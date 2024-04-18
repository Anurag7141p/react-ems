import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/user/userSlice";

const UserData = () => {
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const userDelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  };


  return (
    <div className="w-full min-h-[850px] py-10  bg-slate-100 flex justify-center items-center">
      <div className="lg:w-3/4 md:w-3/4 h-auto  flex flex-col gap-4 bg-slate-100">
        <div className="flex justify-end">
          <Link to="/adduser">
            <button className="flex flex-row items-center justify-center w-full px-4 py-3 mb-4 text-sm font-bold leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 ring-2 ring-indigo-400 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
              Add User
            </button>
          </Link>
        </div>
        {users.map((curElem) => (
          <div className=" w-full flex justify-between gap-5 items-center bg-gray-200 rounded shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300 ...">
            <h1 className="w-[10%] flex justify-center">{curElem.id}</h1>
            <div className="flex flex-col justify-normal items-center w-[30%] py-2">
              <img
                src={curElem.avatar}
                alt=""
                className="rounded-full w-16 h-16"
              />
              <h1>
                {curElem.first_name} {curElem.last_name}
              </h1>
            </div>
            <h1 className="w-[40%] flex justify-center">{curElem.email}</h1>
            <div className="w-[10%] flex justify-center md:text-lg ">
              <MdDelete
                className="cursor-pointer"
                onClick={() => userDelete(curElem.id)}
              />
            </div>
            <div className="w-[10%] flex justify-center md:text-lg">
              <Link to={`/edit/${curElem.id}`}>
                <CiEdit className="cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserData;
