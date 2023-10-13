"use client"

import { Session } from "next-auth";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { ReactNode } from "react";

export const AppSessionProvider = ({
    children,
    session,
  }: {
    children: ReactNode;
    session: Session | null
  }) => {
    return (
      <SessionProvider session = {session}>
        {children}
      </SessionProvider>
    );
  };