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

// export const followUnfollowAPI = {
//     getUsers(id: string, follow: (userId: string) => void) {
//         return instance.post(`follow/${id}`)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     follow(id)
//                 }
//             })
//     }
// }
