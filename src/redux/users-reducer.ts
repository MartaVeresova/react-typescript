import {ActionsTypes} from './store';

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'

export const followAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
    photoUrl: string
}
const initialState = {
    users: [] as Array<UsersType>,
}

export type InitialStateType = typeof initialState

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export default usersReducer