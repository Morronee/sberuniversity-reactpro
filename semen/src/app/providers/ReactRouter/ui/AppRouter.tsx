import {Routes, Route, Navigate} from "react-router";
import {Layout} from "app/layouts";
import {ProtectedRoute} from "app/providers/ReactRouter";
import {LoginPage} from "pages/Login";
import {ProfilePage} from "pages/Profile";
import {PublicPage} from "pages/Public";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={
                    <ProtectedRoute>
                        <div>main</div>
                    </ProtectedRoute>
                }/>

                <Route path={'auth'}>
                    <Route index element={<Navigate to="login" replace/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'signup'} element={<div>signup</div>}/>
                </Route>

                <Route path={'profile'} element={
                    <ProtectedRoute>
                        <ProfilePage/>
                    </ProtectedRoute>
                }/>

                <Route path={'public'} element={<PublicPage/>}/>
            </Route>
        </Routes>
    )
}