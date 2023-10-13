"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { SignUpUser } from "@/context/actions/client/users";
import { signIn } from "next-auth/react";

const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email({
    message: "enter a valid email",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters long",
  }),
});

export type signUpType = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (user: signUpType) => {
    try {
        const { status } = await SignUpUser(user);
        await signIn("credentials",{
            ...user,
            redirect: false
        })
        console.log(status)
    } catch (error) {
        console.error(error)

    }

  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-blue-400 my-6">
            sign up
          </Button>
        </form>
      </Form>
      <div>
        Already a user? <Link className="text-blue-300 font-semibold" href="/login">login</Link>
      </div>
    </div>
  );
};

export default SignUp;
