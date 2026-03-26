import {baseUrl} from "shared/api";
import type {ILoginRequest, TLoginResponse} from "shared/api/auth/types.ts";



export const authApi = {
    async login(requestBody: ILoginRequest): Promise<TLoginResponse> {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        return response.json();
    },

}