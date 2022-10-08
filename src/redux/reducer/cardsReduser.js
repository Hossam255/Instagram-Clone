import { UPDATE_CARDES } from "../action/action"

const initialState = {
    cards : []
}

export const cardsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case UPDATE_CARDES :
            return {...state, cards: action.payload}
        default:
            return state
    }
}