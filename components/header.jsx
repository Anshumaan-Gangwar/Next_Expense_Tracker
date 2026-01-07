import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { LayoutDashboard, PenBox } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
    await checkUser();

    return (
        <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-10 border-b">
            <nav className='px-4 py-2 flex item-center justify-between'>
                <Link href={'/'}>
                    <Image src={"/logo.png"} alt='Logo photo' height={60} width={200} className='h-12 w-auto object-contain'></Image>
                </Link>
                <SignedOut>
                    <div className='flex gap-4'>
                        <SignInButton />
                        <SignUpButton/>
                    </div>
                </SignedOut>
                <SignedIn>
                    <div className='flex gap-4'>
                        <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                            <LayoutDashboard size={18}/>
                            <span>Dashboard</span>
                        </Link>
                        <Link href={"/transaction/create" } className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                            <PenBox size={18}/>
                            <span>Add Transaction</span>
                        </Link>
                        <UserButton />
                    </div>
                </SignedIn>
            </nav>
        </div>
    )
}

export default Header