import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  phone: "",
  email: "",
  password: "",
  isRegistered: false,
  isStudent: false,
  courses: [],
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isRegistered: true,
      };
    },
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
