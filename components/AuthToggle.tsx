"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
const Authentication = () => {
  const { data, status } = useSession();

  let isLoggedIn = status === "authenticated";
  let isLoading = status === "loading";

  return (
    <div>
      {isLoading && (
        <Button>
          <Loader2 />
        </Button>
      )}
      {isLoggedIn && <Button onClick={() => signOut()}>LogOut</Button>}
      {!isLoggedIn && (
        <Link href="/login">
          <Button>LogIn</Button>
        </Link>
      )}
    </div>
  );
};

export default Authentication;
