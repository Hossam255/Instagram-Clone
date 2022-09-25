
export const logoReducer = (state = [], action) => {
    switch(action.type)
    {
        case 'ICON' :
            return {state}
        default:
            return state
    }
}