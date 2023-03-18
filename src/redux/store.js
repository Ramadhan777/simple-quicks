import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = configureStore({
    reducer,
    middleware: [thunk]
})

const persistor = persistStore(store)

export {store, persistor}