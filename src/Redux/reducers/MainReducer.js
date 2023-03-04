import { combineReducers } from "redux"
import ChangeNumber from "./Reducers"
import ChangeNewNumber from "./Reducer2"

const rootReducer = combineReducers({
    ChangeNumber,
    ChangeNewNumber
})

export default rootReducer;