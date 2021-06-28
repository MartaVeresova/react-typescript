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
    getUserProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
}

export const authAPI = {
    getAuthUser() {
        return instance.get<CommonResponseType<GetAuthUserData>>(`auth/me`)
    },
}
