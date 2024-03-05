'use client'

import React from 'react'
import { ModeToggle } from '../themeProvider/ModeToggle'
import { OrganizationSwitcher, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { dark } from '@clerk/themes';
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'

function HeaderDashboard() {
  
  return (
    <div className="absolute flex items-center gap-2 md:top-12 md:right-12 top-5 right-5 z-50">
      <ModeToggle />
      <OrganizationSwitcher appearance={{
        elements: {
          organizationSwitcherTrigger: "flex",
          organizationSwitcherPopoverCard: "bg-background",
          organizationSwitcherTriggerIcon: "text-foreground",
          avatarBox: "rounded-full",
          userPreviewMainIdentifier: "text-foreground",
          organizationPreviewMainIdentifier: "text-foreground",
          organizationSwitcherPopoverActionButtonIcon: "text-foreground",
          organizationSwitcherPopoverActionButtonText: "text-foreground",
          organizationSwitcherPopoverFooter: "hidden"
        },
        baseTheme: dark
      }} />
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

export default HeaderDashboard