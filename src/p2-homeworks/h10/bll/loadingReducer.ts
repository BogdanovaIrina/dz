const initState = {
     loading:false
}

export const loadingReducer = (state = initState, action: ActionType): typeof initState => { // fix any
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                loading:action.payload.loading
            }
        }
        default: return state
    }
}

export type ActionType = loadingACType
export type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => {
    return {
        type:"LOADING",
        payload: {
            loading
        },
    }
} // fix any