import {type ComponentType, useCallback, useMemo, useState} from "react";
import {AuthContext, createInitAuthInfo} from "shared/lib/authContext.ts";
import type {AuthContextModel} from "shared/model/auth/auth.ts";

export const withAuthProvider = (WrappedComponent: ComponentType) => () => {
    const [token, setToken] = useState<AuthContextModel['accessToken']>(() => {
        return localStorage.getItem('token') || ''
    });

    const login = useCallback((token: string) => {
        setToken(token)
        localStorage.setItem('token', token)
    }, [])

    const logout = useCallback(() => {
        setToken('')
        localStorage.removeItem('token')
    }, [])

    const value: AuthContextModel = useMemo(() => ({
        login,
        logout,
        ...createInitAuthInfo(),
        accessToken: token,
    }), [token])

    return (
        <AuthContext.Provider value={value}>
            <WrappedComponent/>
        </AuthContext.Provider>
    )
}