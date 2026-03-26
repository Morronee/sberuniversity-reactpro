import {LoginForm} from "features/LoginForm";

export const LoginPage = () => {
    return (
        <div className={'flex justify-center items-center mt-12'}>
            <div className="basis-80">
                <LoginForm/>
            </div>
        </div>
    )
}