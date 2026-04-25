import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import NavBar from './nav-bar'
import { Button } from './ui/button'
import { shadcn } from '@clerk/ui/themes'

export default function Provider({children}:{
    children: React.ReactNode
}){
    return(
    <ClerkProvider appearance={
      {
        theme:shadcn
      }
    }
    
    >
        <NavBar>
            <Show when="signed-out">
              <SignInButton mode='modal'>
                <Button variant={"outline"} className=' cursor-pointer transition !hover:opacity-85 !hover:bg-primary'>Sign In</Button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <Button className='cursor-pointer transition  hover:opacity-85'>Sign Up</Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
        </NavBar>
        {children}
    </ClerkProvider> 
    ) 
}