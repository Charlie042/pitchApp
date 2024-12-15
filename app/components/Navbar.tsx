import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth } from '@/auth'
import {signIn, signOut } from '@/auth'

const Navbar = async () => {
    const session = await auth()
  return (
    <header className="px-5 py-3 bg-white ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={100} height={80} alt="logo" />
        </Link>
        {session && session?.user ? (
          <>
            <Link href="/startup/create" className="text-black">
              Create Post
            </Link>

            <Link href={`/user/${session?.user?.id}`} className="text-black">
              <span>{session?.user?.name}</span>
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type='submit' className="text-black">
                <span>Sign Out</span>
              </button>
            </form>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
            className="text-black"
          >
            <button type='submit'>Sign In</button>
          </form>
        )}
      </nav>
    </header>
  );
}

export default Navbar