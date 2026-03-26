import {type PropsWithChildren} from "react";
import {Navigate, useLocation} from "react-router";
import {useAuthContext} from "shared/lib/authContext.ts";

export const ProtectedRoute = ({children}: PropsWithChildren) => {
    const location = useLocation();
    const authContext = useAuthContext()
    const isAuth = Boolean(authContext.accessToken)
    
    if (!isAuth) {
       return <Navigate to={'/auth/login'} replace={true} state={{from: location}} />
    }
    
    return children
}