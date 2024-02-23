import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import globalReducer from "./features/globalSlice";
import signinReducer from "./features/signinSlice";

export * from "./features/globalSlice";
export * from "./features/signinSlice";

const logger = createLogger();

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
  reducer: {
    globalReducer,
    signinReducer,
  },
});
