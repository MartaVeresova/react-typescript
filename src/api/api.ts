import axios from 'axios';
import {ProfileType} from '../redux/profile-reducer';
import {UsersType} from '../redux/users-reducer';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a53e0f65-c3ac-4834-99fc-a88db669947f',
    },
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    followUsers(userId: string) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
    },
    unfollowUsers(userId: string) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`/profile/status`, {status})
    },
}

export const authAPI = {
    authMe() {
        return instance.get<CommonResponseType<GetAuthUserData>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: boolean) {
        return instance.post<CommonResponseType<{ userId: string }>>(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout() {
        return instance.delete<CommonResponseType>(`/auth/login`)
    },
}

//types
export enum ResponseStatuses {
    success = 0,
    error = 1,
    captcha = 10,
}

type GetUsersType = {
    items: UsersType[]
    totalCount: number
    error: string | null
}

export type CommonResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: T
}

type GetAuthUserData = {
    id: number
    email: string
    login: string
}
