import axios from "axios";
import {ProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";


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
    getStatus: (userId: number) => {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
    },
    savePhoto: (photoFile: string | Blob) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile: (profile: ProfileType) => {
        return instance.put('profile/', profile)
    }

}

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
    },
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout: () => {
        return instance.delete(`auth/login`)
    },
}

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get(`security/get-captcha-url`)
    },

}

export const headerAPI = {}

