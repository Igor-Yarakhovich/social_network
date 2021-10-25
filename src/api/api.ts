import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '1d2ceb02-5049-4377-a187-7bdb89f8ce75'
    }
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUsers: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUsers: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile: (userId: number) => {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
    }
}

export const headerAPI = {}

