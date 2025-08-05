'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function LoginButton() {
  return (
    <div>
      <button className='px-3 py-1' onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
