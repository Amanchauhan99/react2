import { legacy_createStore as createStore } from "redux";
import { storeReducer } from "./StoreReducer";

export let myStore = createStore(storeReducer);
