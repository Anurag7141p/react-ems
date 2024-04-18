import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  newUser: null,
  editData: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
      state.users = state.users.filter((curElem) => {
        return curElem.id !== action.payload;
      });
    },
    setAddUser: (state, action) => {
      state.newUser = action.payload;
      state.users.push(state.newUser);
    },
    editUser: (state, action) => {
      const user = state.users.find((data) => data.id == action.payload);
      state.editData = user;
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex((user) => user.id == updatedUser.id);
      console.log(index)
      if (index != -1) {
        state.users[index] = updatedUser;
      }
      // state.editData=[]
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, deleteUser, setAddUser, editUser, updateUser } =
  userSlice.actions;

export default userSlice.reducer;
