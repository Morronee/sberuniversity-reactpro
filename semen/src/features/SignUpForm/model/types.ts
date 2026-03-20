import z from "zod";
import type {signUpFormValidationSchema} from "features/SignUpForm/model";

export type TSignUpFormValues = z.infer<typeof signUpFormValidationSchema>