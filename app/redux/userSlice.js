import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userAge: "",
    userHeight: "",
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
  },
});

export const { setUserName, setUserAge, setUserHeight } = userSlice.actions;

export default userSlice.reducer;
