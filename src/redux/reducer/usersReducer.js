import { UPDATE_USERS } from "../action/action"

const initialState = {
    users : []
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case UPDATE_USERS :
            return {...state, users: action.payload}
        default:
            return state
    }
}