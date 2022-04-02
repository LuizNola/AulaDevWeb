import { UserLogin, RegisterUser } from "../types/user_types";
import { apiClient } from "../../services/api";

export async function login (userData: UserLogin) {
    return apiClient.post('login', {user: userData.user, password: userData.password})
}

export async function register(userData: RegisterUser){
    return apiClient.post(
    'register',
     {
        name: userData.name, 
        curso: userData.curso, 
        user: userData.user, 
        password: userData.password 
    })
}

export * as authRequests from './auth.requests'
