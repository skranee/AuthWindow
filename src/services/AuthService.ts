import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/AuthResponse";
export default class AuthService{
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {login, password})
    }
}