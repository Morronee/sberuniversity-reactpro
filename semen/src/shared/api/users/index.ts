import {baseUrl} from "shared/api";
import type {IUsersMeResponse} from "shared/api/users/types.ts";



export const usersApi = {
    async me(): Promise<IUsersMeResponse> {
        const response = await fetch(`${baseUrl}/users/me`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": String(localStorage.getItem('token'))
            }
        });

        return response.json();
    },

}