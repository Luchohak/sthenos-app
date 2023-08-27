import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userAge: "",
    userHeight: "",
    userWeight: "",
    userSex: "",
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserAge: (state, action) => {
      state.userAge = action.payload;
    },
    setUserHeight: (state, action) => {
      state.userHeight = action.payload;
    },
    setUserWeight: (state, action) => {
      state.userWeight = action.payload;
    },
    setUserSex: (state, action) => {
      state.userSex = action.payload;
    },
  },
});

export const {
  setUserName,
  setUserAge,
  setUserHeight,
  setUserWeight,
  setUserSex,
} = userSlice.actions;

export default userSlice.reducer;
