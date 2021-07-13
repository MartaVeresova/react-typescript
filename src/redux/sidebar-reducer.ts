export type SidebarActionsType = ReturnType<any>


const initialState = {}
export type InitialStateType = typeof initialState

const sidebarReducer = (state: InitialStateType = initialState, action: SidebarActionsType): InitialStateType => {

    return state
}

export default sidebarReducer