import {Link, type LinkProps} from "react-router";
import {Home} from "lucide-react";
import {useIsAuth} from "shared/lib/useIsAuth.ts";
import {useMemo} from "react";


export const Header = () => {
    const isAuth = useIsAuth()

    const links = useMemo<Array<LinkProps>>(() => {
        if (isAuth) {
            return [
                {
                    to: '/profile',
                    children: "Профиль"
                }
            ]
        } else {
            return [
                {
                    to: '/auth/login',
                    children: "Войти"
                },
                {
                    to: '/auth/signup',
                    children: "Зарегистрироваться"
                }
            ]
        }
    }, [isAuth])


    return (
        <header className="bg-amber-600 p-8 flex justify-between">
            <Link to={"/"}>
                <Home className={'text-white hover:text-amber-200 hover:scale-105 transition'} size={32}/>
            </Link>

            <div className={'flex gap-4 text-white bold'}>
                {links.map((linkProps) => <Link className={'hover:text-amber-200 hover:scale-105 transition'} {...linkProps} key={String(linkProps.to)}/>)}
            </div>
        </header>
    )
}