// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
//
import { rootReducer } from "./root-reducer";
//
// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user", "categories"],
// };
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
//
// const composeEnhancer =
//   (process.env.NODE_ENV === "development" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
//
// const composedEnhancmements = composeEnhancer(applyMiddleware(...middleWares));
//
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
  // enhancers: [composedEnhancmements],
});

// createStore(persistedReducer, undefined, composedEnhancmements);
//
// export const persistor = persistStore(store);
