import { configureStore } from "@reduxjs/toolkit";
import products from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
export const store = configureStore({
  reducer: {
    products: products,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(productsApi.middleware);
  },
});
