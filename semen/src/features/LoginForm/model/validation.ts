import { z } from 'zod';

export const loginFormValidationSchema = z
    .object({
        email: z.email(),
        password: z.string().min(6, 'Введите пароль'),
    })
