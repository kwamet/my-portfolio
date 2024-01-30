'use client'
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet"
import { Button } from "./ui/button"

export default function Navbar() {
    
    function handleClick() {
        alert('You clicked me!');
      }
  
    return (
    <div className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white dark:bg-black px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/me.jpg" alt="Kwame Trancoso" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-semibold">Kwame Trancoso</span>
        </Link>
      <div className="hidden md:flex gap-4">
        <Link className="text-sm font-medium hover:underline decoration-lime-500 underline-offset-4" href="#">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline decoration-lime-500 underline-offset-4" href="#">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline decoration-lime-500  underline-offset-4" href="#">
          Experience
        </Link>
        <Link className="text-sm font-medium hover:underline decoration-lime-500 underline-offset-4" href="#">
          Education
        </Link>
        <Link className="text-sm font-medium hover:underline decoration-lime-500 underline-offset-4" href="#">
          Skills
        </Link>
        <Link className="text-sm font-medium hover:underline decoration-lime-500 underline-offset-4" href="#">
          Contact
        </Link>
      </div>
        <div className="flex items-center gap-4">
            <Button className="hidden md:block text-white bg-black ring-1  ring-lime-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-lime-500 hover:scale-100 duration-300" onClick={handleClick}>Resume</Button>
        </div>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

