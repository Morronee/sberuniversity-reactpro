import { z } from 'zod';

export const signUpFormValidationSchema = z
    .object({
        username: z.string().min(1, 'Имя обязательно'),
        email: z.email().min(1, 'Email обязателен'),
        password: z.string().min(6, 'Введите пароль'),
        passwordConfirm: z.string().min(6, 'Повторите пароль'),
        social: z.array(
            z.object({
                url: z.url('Некорректный URL')
            })
        )
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.passwordConfirm) {
            ctx.addIssue({
                path: ['passwordConfirm'],
                code: 'custom',
                message: 'Пароль должен совпадать',
            });
        }
    });
