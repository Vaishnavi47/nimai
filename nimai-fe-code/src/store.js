import rootReducer from "./Store/Reducers"; // Import your combined reducers
import { configureStore } from "@reduxjs/toolkit"; // Recommended for simplifying store setup

const store = configureStore({
  reducer: rootReducer,
});

export default store;
