"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const cardSchema = z.object({
  name: z.string(),
  cardNumber: z.coerce.number(),
  expiryDate: z.string(),
  cvv: z.coerce.number().min(1, {
    message: "Enter CVV",
  }),
});

type CardValuesType = z.infer<typeof cardSchema>;

const CardDetailsForm = () => {
  const form = useForm<CardValuesType>({
    resolver: zodResolver(cardSchema),
    defaultValues: {},
  });

  const onSubmit = (data: CardValuesType) => {
    console.log("Credit card date processed", data);
  };
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fefcfc] text-sm leading-[normal] font-medium">
                  Name on card
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="rounded-[0.375rem] bg-[#626BC6] text-[#c4c4c4] placeholder:text-[#c4c4c4]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fefcfc] text-sm leading-[normal] font-medium">
                  Card Number
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className="rounded-[0.375rem] bg-[#626BC6] text-[#c4c4c4] placeholder:text-[#c4c4c4]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fefcfc] text-sm leading-[normal] font-medium">
                  ExpiryDate{" "}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-[0.375rem] bg-[#626BC6] text-[#c4c4c4] placeholder:text-[#c4c4c4]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#fefcfc] text-sm leading-[normal] font-medium">
                  CVV
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-[0.375rem] bg-[#626BC6] text-[#c4c4c4] placeholder:text-[#c4c4c4]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default CardDetailsForm;
