import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '56cc9d09-6ac5-48a7-98d1-6f7ea21ef704',
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUsers(userId: string) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUsers(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
}

export const authAPI = {
    getAuthUser() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}
