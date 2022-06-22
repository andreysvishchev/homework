

const initState: iniStateType = {
    theme: 'dark'
};

export const themeReducer = (state: iniStateType = initState, action: ActionsType): iniStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME":
            return {...state, theme: action.theme}

        default:
            return state;
    }
};

export type ThemeType = 'dark'| 'red'| 'some'

type iniStateType = {
    theme: ThemeType
}

type ActionsType =
    ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: ThemeType) => {
    return {
        type: 'CHANGE-THEME',
        theme
    } as const
}; // fix any