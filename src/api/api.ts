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
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`profile/` + userId)
    },
    getStatus:(userId: number) => {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus:(status: string) => {
        return instance.put(`profile/status`, {status})
    }

}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
    },
    login: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout: () => {
        return instance.delete(`auth/login`)
    },
}

export const headerAPI = {}

