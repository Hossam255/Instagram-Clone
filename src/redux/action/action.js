
export const UPDATE_CARDES ="UPDATE_CARDS"
export const UPDATE_CARDES_SAGA ="UPDATE_CARDES_SAGA"
export const UPDATE_USERS ="UPDATE_USERS"
export const UPDATE_USERS_SAGA ="UPDATE_CARDES_SAGA"

export const updateCards = (cards) => {
    return {type: UPDATE_CARDES, payload: cards}
    
}

export const updateUsers = (users) => {
    return {type: UPDATE_USERS, payload: users}
}