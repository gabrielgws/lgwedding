'use client'

import React from 'react'
import { ModeToggle } from '../themeProvider/ModeToggle'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'

function Header() {
  
  return (
    <div className="absolute flex items-center gap-2 md:top-12 md:right-12 top-5 right-5 ">
      <ModeToggle />
      <SignedIn>
        <UserButton afterSignOutUrl='/'/>
      </SignedIn>
      <div>
        <SignedOut>
          <Button asChild variant='outline' className='rounded-full' size='lg'>
            <Link href="/sign-in" className='justify-start gap-2'>
              <LogInIcon size={16}/>
              Login
            </Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  )
}

export default Header