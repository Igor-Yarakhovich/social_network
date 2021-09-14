import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": '614aed46-96d5-4233-8aa0-cb18d5a35ee8'
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

