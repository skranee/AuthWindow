import {userModel} from "../UserDescription";

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    user: userModel;
}