import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ProductValuesType } from "@/app/upload/UploadContainer";
import Link from "next/link";
import AddToCartButton from "./AddtocartButton";

interface ProductCardProps {
  product: ProductValuesType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const redirectionLink = `/shoes/${product.id}`;
  return (
    <Card className="w-[20rem] h-[24rem]">
      <Link href={redirectionLink}>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={product.image}
            width={200}
            height={100}
            alt={product.name}
            className="w-[264px] h-[180px] rounded-lg"
          />
       </CardContent>
      </Link>
      <CardFooter className="flex gap-x-4">
        <AddToCartButton  product={product} quantity={1}/>
        <div>
          <div>
            price<span className="before:content-[':']">{product.price}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
