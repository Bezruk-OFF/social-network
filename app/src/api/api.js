// import axios from "axios";
import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cd5b4704-25be-4df3-bc26-d395b965d767'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data);
    }
}