// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/FormSlice"; 

// const store = configureStore({
//   reducer: {
//     user: authReducer,
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/FormSlice"; 

const store = configureStore({
  reducer: {
    user: authReducer,
  },
});

export default store;


