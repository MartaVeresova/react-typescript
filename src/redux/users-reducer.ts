import {usersAPI} from '../api/api';
import {AppThunk} from './redux-store';

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type FollowSuccessActionType = ReturnType<typeof followSuccess>
export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressActionType = ReturnType<typeof toggleIsFollowingProgress>

export type UsersActionsType =
    FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleIsFollowingProgressActionType

export type UsersType = {
    id: string
    followed: boolean
    name: string
    status: string
    uniqueUrlName: string | null
    location?: {
        city: string
        country: string
    }
    photos: {
        small: string
        large: string
    }
}
type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}
const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {

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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: string) => ({type: FOLLOW, userId}) as const
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const setUsers = (users: Array<UsersType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching
}) as const
export const toggleIsFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
}) as const


export const getUsers = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(toggleIsFetching(true))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const follow = (userId: string): AppThunk => async dispatch => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const data = await usersAPI.followUsers(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const unfollow = (userId: string): AppThunk => async dispatch => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const data = await usersAPI.unfollowUsers(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}


export default usersReducer