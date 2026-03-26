import {authApi} from "shared/api/auth";
import {getEnvVariable} from "shared/lib/vite.ts";
import {usersApi} from "shared/api/users";

export const baseUrl = getEnvVariable('VITE_API_URL')

export const API = {
    auth: authApi,
    users: usersApi,
}