import { fetchCards } from "../../api/cardServies"
import { fetchUsers } from "../../api/userService"

export const updateCards = (cards) => {
    
    return {type: "UPDATE_CARDS", payload: cards}
    
}

export const updateUsers = (users) => {
    return {type: "UPDATE_USERS", payload: users}
}