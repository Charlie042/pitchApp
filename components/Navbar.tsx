import Link from 'next/link'
import React, { Suspense } from 'react'
import Image from 'next/image'
import { auth } from '@/auth'
import { signIn, signOut } from '@/auth'
import { UserProfile } from '@/types/auth' // You'll need to create this type

// Separate component for authenticated user menu
const UserMenu = ({ user }: { user: UserProfile }) => (
  <>
    <Link
      href="/startup/create"
      className="text-black font-semibold font-work-sans text-lg hover:opacity-80 transition-opacity"
    >
      Create
    </Link>

    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button 
        type="submit" 
        className="text-primary font-work-sans font-bold hover:opacity-80 transition-opacity"
        aria-label="Sign out"
      >
        <span>Log Out</span>
      </button>
    </form>

    <Link href={`/user/${user.id}`} className="text-black">
      <Image
        src={user.image || "/default-avatar.png"}
        alt={`${user.name || 'User'}'s profile`}
        width={40}
        height={40}
        className="rounded-full object-contain hover:ring-2 hover:ring-primary transition-all"
      />
    </Link>
  </>
)

// Loading fallback component
const NavbarSkeleton = () => (
  <div className="animate-pulse flex justify-between items-center">
    <div className="w-[100px] h-[80px] bg-gray-200 rounded" />
    <div className="w-[100px] h-[40px] bg-gray-200 rounded" />
  </div>
)

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="px-5 py-3 bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-[89rem] mx-auto flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            width={100} 
            height={80} 
            alt="logo"
            priority // Add priority for above-the-fold image
          />
        </Link>

        <Suspense fallback={<NavbarSkeleton />}>
          <div className="flex gap-5 items-center">
            {session?.user ? (
              <UserMenu user={session.user as UserProfile} />
            ) : (
              <form
                action={async () => {
                  'use server'
                  
                    await signIn("github")
                  
                }}
              >
                <button 
                  type="submit" 
                  className="border-2 border-primary rounded-xl px-5 py-2 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Sign in with GitHub"
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </Suspense>
      </nav>
    </header>
  )
}

export default Navbar
