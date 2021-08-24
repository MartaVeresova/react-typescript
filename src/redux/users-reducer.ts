import {ResponseStatuses, usersAPI} from '../api/api';
import {AppThunkType} from './store';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/helpers/objectHelpers';


const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[],
}
export type InitialStateType = typeof initialState


export const usersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {
        case 'usersPage/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, true)
                // users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'usersPage/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, false)
                // users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'usersPage/SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'usersPage/SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'usersPage/SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case 'usersPage/TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.value
            }
        case 'usersPage/TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress:
                    action.inProgress
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//actions
export const followSuccess = (userId: number) =>
    ({type: 'usersPage/FOLLOW', userId} as const)

export const unfollowSuccess = (userId: number) =>
    ({type: 'usersPage/UNFOLLOW', userId} as const)

export const setUsers = (users: Array<UsersType>) =>
    ({type: 'usersPage/SET-USERS', users} as const)

export const setCurrentPage = (currentPage: number) =>
    ({type: 'usersPage/SET-CURRENT-PAGE', currentPage} as const)

export const setTotalUsersCount = (totalCount: number) =>
    ({type: 'usersPage/SET-TOTAL-USERS-COUNT', totalCount} as const)

export const toggleIsFetching = (value: boolean) =>
    ({type: 'usersPage/TOGGLE-IS-FETCHING', value} as const)

export const toggleIsFollowingProgress = (inProgress: boolean, userId: number) =>
    ({type: 'usersPage/TOGGLE-IS-FOLLOWING-PROGRESS', inProgress, userId} as const)


//thunks
export const requestUsers = (page: number, pageSize: number): AppThunkType =>
    async dispatch => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        const res = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(res.data.items))
        dispatch(setTotalUsersCount(res.data.totalCount))
    }

const _followUnfollowFlow = async (dispatch: Dispatch<UsersActionsType>, userId: number, apiMethod: any, actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.data.resultCode === ResponseStatuses.success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number): AppThunkType =>
    async dispatch => {
        const apiMethod = usersAPI.followUsers.bind(usersAPI)
        _followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
    }

export const unfollow = (userId: number): AppThunkType =>
    async dispatch => {
        const apiMethod = usersAPI.unfollowUsers.bind(usersAPI)
        _followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
    }

//types
export type UsersType = {
    id: number
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