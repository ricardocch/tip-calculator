import rootReducer from "../reducer/index.js"
import { createStore} from "redux";
export const store = createStore(rootReducer)
