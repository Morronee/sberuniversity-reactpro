import {loginFormValidationSchema} from "features/LoginForm/model";
import {z} from "zod";

export type TLoginFormValues = z.infer<typeof loginFormValidationSchema>