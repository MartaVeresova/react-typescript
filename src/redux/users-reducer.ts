import {ResponseStatuses, usersAPI} from '../api/api';
import {AppThunk} from './redux-store';


// type InitialStateType = {
//     users: Array<UsersType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: string[]
// }

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as string[],
}
export type InitialStateType = typeof initialState


const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
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

//actions
export const followSuccess = (userId: string) =>
    ({type: 'FOLLOW', userId} as const)

export const unfollowSuccess = (userId: string) =>
    ({type: 'UNFOLLOW', userId} as const)

export const setUsers = (users: Array<UsersType>) =>
    ({type: 'SET-USERS', users} as const)

export const setCurrentPage = (currentPage: number) =>
    ({type: 'SET-CURRENT-PAGE', currentPage} as const)

export const setTotalUsersCount = (totalCount: number) =>
    ({type: 'SET-TOTAL-USERS-COUNT', totalCount} as const)

export const toggleIsFetching = (isFetching: boolean) =>
    ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

export const toggleIsFollowingProgress = (isFetching: boolean, userId: string) =>
    ({type: 'TOGGLE-IS-FOLLOWING-PROGRESS', isFetching, userId} as const)


//thunks
export const getUsers = (currentPage: number, pageSize: number): AppThunk =>
    async dispatch => {
        dispatch(toggleIsFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }

export const follow = (userId: string): AppThunk =>
    async dispatch => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const data = await usersAPI.followUsers(userId)
        if (data.resultCode === ResponseStatuses.success) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    }

export const unfollow = (userId: string): AppThunk =>
    async dispatch => {
        dispatch(toggleIsFollowingProgress(true, userId))
        const data = await usersAPI.unfollowUsers(userId)
        if (data.resultCode === ResponseStatuses.success) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    }

//types
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

export type FollowSuccessActionType = ReturnType<typeof followSuccess>
export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleIsFollowingProgressActionType = ReturnType<typeof toggleIsFollowingProgress>

export type UsersActionsType =
    | FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleIsFollowingProgressActionType



export default usersReducer