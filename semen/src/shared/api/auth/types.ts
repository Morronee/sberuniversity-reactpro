export interface ILoginRequest {
    email: string
    password: string
}

export interface ILoginResponseSuccess {
    "user": {
        "id": string,
        "email": string
    },
    "accessToken": `Bearer ${string}`
}

export interface ILoginResponseError {
    "statusCode": number,
    "message": Array<string>,
    "error": string
}

export type TLoginResponse = ILoginResponseSuccess | ILoginResponseError;