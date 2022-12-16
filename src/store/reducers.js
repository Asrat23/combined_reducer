import { combineReducers } from "redux"
import { age, firstname, gender, lastname } from "./reducer"
import { profesion } from "./reducer"

export const reducers = combineReducers({
    FIRSTNAME:firstname,
    LASTNAME:lastname,
    AGE:age,
    GENDER:gender,
    PROFESION:profesion
    


})