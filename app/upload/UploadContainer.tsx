"use client";

import { Input } from "@/components/ui/input";
import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProductContext } from "@/context/productContext";
import * as next from'next/config'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AddProduct, GetAllProducts } from "@/context/actions/client/products";
import ProductCard from "@/components/ProductCard";
import { useToast } from "@/components/ui/use-toast";
const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(2, {
    message: "Please provide appropriate Name",
  }),
  description: z.string(),
  image: z.string(),
  price: z.coerce.number().min(1,{
    message: "Entry required"
  })
});
 
export type ProductValuesType = z.infer<typeof ProductSchema>;

const UploadContainer = () => {
  const { state, dispatch } = useProductContext();
  const { toast } = useToast()
  const form = useForm<ProductValuesType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      price: 0,
      id:"",
    },
    mode: "onChange",
  });
  async function onSubmit(data: ProductValuesType) {
    console.log(data, "Data submitted");
    const productData = await AddProduct(data).then(res => res.data);
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: productData.id,
        name: productData.name,
        description: productData.description,
        image: productData.image,
        price: String(productData.price),
      },
    });
    toast({
        title: "Product added",
        description: `${productData.name}`,
      })
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="shoes..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Add description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ImageURL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Product</Button>
        </form>
      </Form>
      {/* <div>
        <ProductCard product={state.products[state.products.length - 1]} />
      </div> */}
    </div>
  );
};

export default UploadContainer;
