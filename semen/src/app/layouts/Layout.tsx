import {Outlet} from "react-router";
import {Header} from "widgets/header";

export const Layout = () => {

    return (
        <div className={'min-h-screen flex flex-col'}>
            <Header />

            <main className="grow p-8 bg-amber-100">
                <Outlet />
            </main>
        </div>
    )
}