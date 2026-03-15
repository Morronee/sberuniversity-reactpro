import {FormProvider, useFieldArray, useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpFormValidationSchema, type TSignUpFormValues} from "features/SignUpForm/model";
import {FormInput} from "shared/ui/form";
import {Button} from "shared/ui/Button/Button.tsx";
import {Delete} from "lucide-react";

export const SignUpForm = () => {
    const form = useForm<TSignUpFormValues>({
        resolver: zodResolver(signUpFormValidationSchema),
        defaultValues: {
            social: [{url: ''}]
        }
    })

    const {fields, append, remove} = useFieldArray({
        control: form.control,
        name: 'social'
    })

    const {register, handleSubmit, formState: {errors}} = form

    const onSubmit = (data: TSignUpFormValues) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-4 w-64'}>

                <FormInput {...register('username')} type={'username'} placeholder={'Username'}
                           error={errors.username?.message}/>
                <FormInput {...register('email')} type={'email'} placeholder={'Email'} error={errors.email?.message}/>
                <FormInput {...register('password')} type={'password'} placeholder={'Password'}
                           error={errors.password?.message}/>
                <FormInput {...register('passwordConfirm')} type={'password'} placeholder={'Repeat password'}
                           error={errors.passwordConfirm?.message}/>

                {fields.map((field, index) => {
                    return (
                        <div className={'relative'} key={field.id}>
                            <FormInput className={'pr-8'}  {...register(`social.${index}.url`)} type={'text'}
                                       placeholder={'Url'} error={errors.social?.[index]?.url?.message}/>
                            <Delete className={'absolute right-2 top-2.5 text-amber-700 cursor-pointer'}
                                    onClick={() => remove(index)}/>
                        </div>
                    )
                })}

                <Button type={'button'} onClick={() => append({url: ''})}>
                    Добавить ссылку
                </Button>

                <Button type={'submit'}>
                    Okaaaay let's go
                </Button>

            </form>
        </FormProvider>
    )
}