import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    userAge: ""
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserAge: (state, action) => {
        state.userAge = action.payload; 
    },
  },
});

export const { setUserName, setUserAge } = userSlice.actions;

export default userSlice.reducer;
