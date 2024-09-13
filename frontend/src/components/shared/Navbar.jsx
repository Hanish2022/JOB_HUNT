
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { LogOut, User2 } from "lucide-react"

import React from 'react'

const Navbar = () => {
    const user = false;

  return (
      <div className='bg-white'>
          <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
              <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
          </div>
          <div className='flex items-center gap-12'>
              <ul className='flex font-medium items-center gap-5'>
                  <li>Home</li>
                  <li>Jobs</li>
                  <li>Browse</li>
                  </ul>
                  {
                      !user ? (
                          <div >
                             <Link to='/login'> <Button variant="outline">Login</Button></Link>
                             <Link to='/signup'> <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                          </div>
                      ) : (
                             <Popover >
                      <PopoverTrigger asChild>
                           <Avatar className=' h-10 w-10 rounded-full cursor-pointer'>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="h-full w-full rounded-full object-cover" />
     <AvatarFallback className="h-full w-full rounded-full">CN</AvatarFallback>
    </Avatar>
                          
                      </PopoverTrigger>
                      <PopoverContent className='w-80 m-3 bg-blend-color'>
                          <div className='flex gap-2 space-y-2'>
                               <Avatar className=' h-10 w-10 rounded-full cursor-pointer'>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"  className="h-full w-full rounded-full object-cover"/>
   
                              </Avatar>
                              <div>
                                  
                             <h4 className='font-medium'>Hanish Mern</h4>
                              <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit</p>
                              </div>
                          </div>
                          <div className="flex flex-col my-2 text-gray-600">
                              <div className="flex wfit items-center gap-2 cursor-pointer">
                                <User2/>
                                  <Button variant="link" >
                                  view profile
                              </Button>
                             </div>
                              
                                <div className="flex wfit items-center gap-2 cursor-pointer">
                                  <LogOut/>
                                  <Button variant="link" >
                                  logout
                              </Button>
                             </div>
                          </div>
                          
                         
                      </PopoverContent>
                  </Popover>  
                      )
                  }
                 
          </div>
          </div>
          
          
    </div>
  )
}

export default Navbar 