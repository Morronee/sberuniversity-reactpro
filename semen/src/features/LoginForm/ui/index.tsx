import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginFormValidationSchema, type TLoginFormValues} from "features/LoginForm/model";
import {FormInput} from "shared/ui/form";
import {Button} from "shared/ui/Button";
import {API} from "shared/api";
import {useNavigate} from "react-router";
import {useAuthContext} from "shared/lib/authContext.ts";

export const LoginForm = () => {
    const navigate = useNavigate();
    const form = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormValidationSchema),
    })

    const {register, handleSubmit, formState: {errors}} = form

    const {login} = useAuthContext()

    const onSubmit = async (data: TLoginFormValues) => {
        try {
            const response = await API.auth.login(data)

            if ('accessToken' in response) {
                login(response.accessToken)

                navigate('/profile')
            }

        } catch (e) {

        }
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-4'}>
                <FormInput {...register('email')} type={'email'} placeholder={'Email'} error={errors.email?.message}/>
                <FormInput {...register('password')} type={'password'} placeholder={'Пароль'}/>

                <Button type={'submit'}>
                    Войти
                </Button>
            </form>
        </FormProvider>
    )
}