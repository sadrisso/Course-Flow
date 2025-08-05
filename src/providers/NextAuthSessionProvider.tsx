"use client"
import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

function NextAuthSessionProvider({children}: Props) {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}

export default NextAuthSessionProvider;
