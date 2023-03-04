import { createStore } from "redux";
import rootReducer from "./Redux/reducers/MainReducer";

const store = createStore(rootReducer);

export default store;