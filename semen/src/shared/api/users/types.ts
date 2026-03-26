export interface IUsersMeResponse {
    "id": string,
    "email": string,
    "name": string,
    "avatarPath": string,
    "about": string,
    "phone": string,
    "roles": Array<string>,
    "likes": Array<any>,
    "favoritesPost": Array<any>
}