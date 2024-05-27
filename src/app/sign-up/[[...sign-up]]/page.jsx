'use client'

import NavBar from '@/components/NavBar/NavBar'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

export default function SignUpPage() {
  return (
    <> 
    <NavBar/> 
    <section className='bg-custom-bg bg-cover bg-center flex items-center justify-center w-full  h-screen '>  
    <SignUp.Root>
      <SignUp.Step name="start"
      className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <h1 className='text-5xl font-bold text-center text-white mb-8'>Create an account</h1>
        <div className="grid grid-cols-2 gap-x-4">
            <Clerk.Connection name="google"
            className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-6" />
              
            </Clerk.Connection>
            <Clerk.Connection name="facebook"
            className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-1.5 px-2.5 rounded-md"
            >
              <Clerk.Icon className="size-6" />
              
            </Clerk.Connection>
        </div>
        <Clerk.Field name="username" className="space-y-2">
          <Clerk.Label className="text-sm font-medium">Username</Clerk.Label>
          <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError className="block text-red-500 text-sm"/>
        </Clerk.Field>

        <Clerk.Field name="emailAddress" className="space-y-2">
          <Clerk.Label className="text-sm font-medium">Email</Clerk.Label>
          <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError className="block text-red-500 text-sm" />
        </Clerk.Field>
        
        <Clerk.Field name="password" className="space-y-2">
          <Clerk.Label className="text-sm font-medium">Password</Clerk.Label>
          <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError  className="block text-red-500 text-sm"/>
        </Clerk.Field>

        <SignUp.Action submit 
         className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
        >Sign up</SignUp.Action>
        <p className="text-center text-sm ">
            Already have an account?{' '}
            <a
              href="#"
              className="font-medium text-red-400 decoration-red-400/20 underline-offset-4 outline-none hover:text-red-600 hover:underline focus-visible:underline"
            >
              Sign In 
            </a>
          </p>
      </SignUp.Step>

      <SignUp.Step name="continue"
        className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <h1 className='text-center'>Fill in missing fields</h1>

        <Clerk.Field name="username"  className="space-y-2">
          <Clerk.Label className="text-sm font-medium">Username</Clerk.Label>
          <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError className="block text-red-500 text-sm"/>
        </Clerk.Field>

        <SignUp.Action submit  
        className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
        >Continue</SignUp.Action>
      </SignUp.Step>
      
      <SignUp.Step name="verifications" 
        className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <SignUp.Strategy name="phone_code">
          <h1 className='text-center'>Check your phone for an SMS</h1>

          <Clerk.Field name="code"  className="space-y-2">
            <Clerk.Label className="text-sm font-medium">Phone Code</Clerk.Label>
            <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black" />
            <Clerk.FieldError className="block text-red-500 text-sm" />
          </Clerk.Field>

          <SignUp.Action submit>Verify</SignUp.Action>
        </SignUp.Strategy>
        
        <SignUp.Strategy name="email_code" 
            className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
        >
          <h1 className='text-center text-2xl'>Check your email</h1>

          <Clerk.Field name="code"  className="space-y-2">
            <Clerk.Label className="text-sm font-medium">Email Code</Clerk.Label>
            <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
            <Clerk.FieldError className="block text-red-500 text-sm"/>
          </Clerk.Field>

          <SignUp.Action submit
            className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
          >Verify</SignUp.Action>
        </SignUp.Strategy>
      </SignUp.Step>
    </SignUp.Root>
</section>  
</>  
  )
}