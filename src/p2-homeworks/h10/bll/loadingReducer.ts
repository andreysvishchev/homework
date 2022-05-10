export type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

export type ActionType = LoadingActionType

export type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {
        type: "SET-LOADING",
        isLoading
    } as const
}


