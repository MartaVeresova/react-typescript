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
            .then(response => {
                return response.data
            })
    }
}


export const followAPI = {
    followUsers(id: string) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const unfollowAPI = {
    unfollowUsers(id: string) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    getAuthHeader() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

export const userProfileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    }
}

