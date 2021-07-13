import axios from 'axios';
import {ProfileType} from '../redux/profile-reducer';
import {UsersType} from '../redux/users-reducer';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '56cc9d09-6ac5-48a7-98d1-6f7ea21ef704',
    },
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUsers(userId: string) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollowUsers(userId: string) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`/profile/status`, {status})
            .then(res => res.data)
    },
}

export const authAPI = {
    authMe() {
        return instance.get<CommonResponseType<GetAuthUserData>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: boolean) {
        return instance.post<CommonResponseType<{ userId: string }>>(`/auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data)
    }
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

type CommonResponseType<T = {}> = {
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
