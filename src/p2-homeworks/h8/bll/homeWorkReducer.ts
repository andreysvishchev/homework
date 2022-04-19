import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
            } else if (action.payload === 'down') {
                return [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
            } else {
                return state
            }
        }
        case 'check': {
            // need to fix
            return [...state.filter(el => el.age > action.payload)]
        }
        default:
            return state
    }
}

type ActionType = checkAction | sortAction

type checkAction = {
    type: 'check'
    payload: 18
}
type sortAction = {
    type: 'sort'
    payload: 'up' | 'down'
}


