import React from 'react'
import { ModeToggle } from '../themeProvider/ModeToggle'

function Header() {
  return (
    <div className="absolute md:top-12 md:right-12 top-5 right-5 ">
      <ModeToggle />
    </div>
  )
}

export default Header