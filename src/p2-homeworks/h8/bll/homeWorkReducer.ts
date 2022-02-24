import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'? [...state].sort((a,b) => a.name>b.name? 1:-1) : [...state].sort((a,b) => a.name>b.name? -1:1)
        }
        case 'check': {
            // need to fix
            return state.filter(f=>f.age >= action.payload)
        }
        default: return state
    }
}

type ActionType = {type: 'sort', payload: 'up'} | {type: 'sort', payload: 'down'} | {type: 'check', payload: 18}