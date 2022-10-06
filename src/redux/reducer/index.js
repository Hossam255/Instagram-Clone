import { combineReducers } from "redux"
import { usersReducer } from "./usersReducer"
import { cardsReducer } from "./cardsReduser"

export const rootReducer = combineReducers({usersReducer,  cardsReducer})

