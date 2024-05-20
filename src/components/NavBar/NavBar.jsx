import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn,SignedOut, UserButton } from '@clerk/nextjs'

function NavBar() {
  return (
    <header>
    <nav className='flex items-center justify-between lg:px-8 p-6 h-20 border border-t-0 border-l-0 border-r-0 border-b-gray-100 fixed z-10 w-full'>
    <div className='flex lg:flex-1'>
                <a href="/" className='-m-1.5  '>
                    <Image src={'/Space_Studio-removebg-preview.png'} width={50} height={0}  className='w-[8rem]'/>
                </a>
            </div>

            {/* What your see on the navbar when u are logged out */}
            <SignedOut>

                <Link href='/sign-up' className='text-white transition rounded hover:bg-red-500 mr-4 py-3 px-4 border-2  '>
                    Sign Up
                </Link>
                <Link href="/sign-in" className='text-white transition rounded hover:bg-red-500 mr-4 py-3 px-4 border-2 '>
                    Sign In
                </Link>
            
            </SignedOut>
             

             {/* What you see on the NavBar When U Are LoggedIn */}
            <SignedIn>
             <Link href='/dashboard' className='mr-4 transition hover:text-red-400'>
                Dashboard
             </Link>
             <UserButton/>
            </SignedIn>
    </nav>
    </header>
  )
}

export default NavBar