import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/user/userSlice";
import UserData from "./components/userData";
import { Route, Routes } from "react-router-dom";
import EditUser from "./components/editUser";
import AddUser from "./components/addUser";

const App = () => {
  const userApi = "https://reqres.in/api/users";
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  console.log(users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(userApi);
        dispatch(setUser(response.data.data));
      } catch (error) {
        console.log("error fetching data", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/adduser" element={<AddUser />} />

      </Routes>
    </div>
  );
};

export default App;
