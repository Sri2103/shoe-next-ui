"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";

const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
const LoginPage = () => {
const searchParams = useSearchParams();
const router = useRouter();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: LoginSchemaType) => {
    console.log("onSubmit");
    console.log(data);
    try {
    //   const callbackUrl = searchParams.get("callbackUrl") || "/";
      const res = await signIn(
        "credentials",
        {
            ...data,
            redirect: false
        },
      ).then((callback) => {
        console.log(callback)
        if (callback?.error) {
            // alert("Invalid credentials");
          }
          if (callback?.ok && !callback?.error) {
           alert("Logged In");
            router.push("/");
          }
      });
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mx-12 px-12">
      <div className="py-12 flex flex-col gap-y-4 m-6 p-4">
        <h1 className="text-black font-['Poppins'] text-3xl font-medium leading-[normal]">
          Welcome back!
        </h1>
        <p className="flex-shrink-0 w-96 h-7 text-black font-['Poppins'] font-medium leading-[normal]">
          Enter your Credentials to access your account
        </p>
      </div>

      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 bg-white m-6 rounded-lg p-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@me.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
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
              Login
            </Button>
          </form>
        </Form>
      </div>

      <div className="m-6 p-4">
        <div>Don&apos;t have an account?</div>
        <Link href="/signup">SignUp</Link>
      </div>
    </div>
  );
};

export default LoginPage;
