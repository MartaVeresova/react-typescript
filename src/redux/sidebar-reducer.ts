export type SidebarActionsType = ReturnType<any>


const initialState = {}
export type InitialStateType = typeof initialState


export const sidebarReducer = (state: InitialStateType = initialState, action: SidebarActionsType): InitialStateType => {

    switch (action.type) {
        case 'sidebar/':
            return {
                ...state,
            }
        default:
            return state
    }
}