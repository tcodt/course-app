import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});
