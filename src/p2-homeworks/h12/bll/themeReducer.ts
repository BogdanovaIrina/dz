import {themeType} from "../HW12";

const initState = {
        theme:'some' as themeType
};

export const themeReducer = (state = initState, action: actionType): typeof initState => { // fix any
    switch (action.type) {
        case "THEME": {
            return {...state, theme:action.theme}
        }
        default: return state;
    }
};

type actionType = changeThemeC

type changeThemeC = ReturnType<typeof changeThemeC>

export const changeThemeC = (theme:themeType) => ({
    type: "THEME",
    theme
} as const)

