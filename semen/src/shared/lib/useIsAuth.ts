import {useAuthContext} from "shared/lib/authContext.ts";

export const useIsAuth = () => {
    const authContext = useAuthContext()

    return !!authContext.accessToken
}