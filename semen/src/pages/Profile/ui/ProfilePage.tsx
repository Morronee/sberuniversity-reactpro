import {useEffect, useState} from "react";
import {API} from "shared/api";
import type {IUsersMeResponse} from "shared/api/users/types.ts";
import {Button} from "shared/ui/Button";
import {useAuthContext} from "shared/lib/authContext.ts";

export const ProfilePage = () => {
    const [me, setMe] = useState<IUsersMeResponse>()

    const {logout} = useAuthContext()

    useEffect(() => {
        if (!me) {
            API.users.me().then((response) => {
                setMe(response);
            })
        }

    }, [me])

    return (
        <div className={'flex flex-col gap-8'}>
            <span>Привет {me?.name}</span>

            <Button onClick={logout}>Выйти из профиля</Button>
        </div>
    )
}