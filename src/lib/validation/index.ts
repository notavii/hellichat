import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2,{message: "Too short"}),
    username: z.string().min(2, { message: "Too short" }),
    email: z.string().min(8, { message: "Too short" }),
    password: z.string().min(8, { message: "Password must be atleast 8 characters." }),
})

export const SignInValidation = z.object({
    email: z.string().min(8, { message: "Too short" }),
    password: z.string().min(8, { message: "Password must be atleast 8 characters." }),
})