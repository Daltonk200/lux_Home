'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function SignInPage() {
  return (
    
  <section className='bg-custom-bg bg-cover bg-center flex items-center justify-center w-full h-screen '>  
    <SignIn.Root>
      <SignIn.Step name="start"
       className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <h1 className='text-5xl font-bold text-center text-white mb-8'>Sign in to <br /> Lux Home</h1>

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

        <Clerk.Field name="identifier" className="space-y-2">
          <Clerk.Label className="text-sm font-medium">Email</Clerk.Label>
          <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError className="block text-red-500 text-sm" />
        </Clerk.Field>

        <SignIn.Action submit 
         className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
        >Continue</SignIn.Action>
        <p className="text-center text-sm ">
            No account?{' '}
            <a
              href="sign-up"
              className="font-medium text-red-400 decoration-red-950/20 underline-offset-4 outline-none hover:text-red-700 hover:underline focus-visible:underline"
            >
              Create an account
            </a>
          </p>
      </SignIn.Step>

      <SignIn.Step name="verifications" 
         className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <SignIn.Strategy name="email_code">
          <h1 className='text-center mb-3'>Check your email</h1>
          <p  className='text-center'>We sent a code to <SignIn.SafeIdentifier />.</p>

          <Clerk.Field name="code" className="space-y-2">
            <Clerk.Label className="text-sm font-medium">Email code</Clerk.Label>
            <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black mb-9"/>
            <Clerk.FieldError className="block text-red-500 text-sm" />
          </Clerk.Field>

          <SignIn.Action submit 
          className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
          >Continue
          </SignIn.Action>
        </SignIn.Strategy>

        <SignIn.Strategy name="password">
          <h1 className='text-center mb-3'>Enter your password</h1>

          <Clerk.Field name="password" className="space-y-2">
            <Clerk.Label className="text-sm font-medium">Password</Clerk.Label>
            <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
            <Clerk.FieldError className="block text-red-500 text-sm" />
          </Clerk.Field>

          <SignIn.Action submit
          className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
          >Continue</SignIn.Action>
          <SignIn.Action className="text-[#8c81f3] hover:underline" navigate="forgot-password" >
            Forgot password?
          </SignIn.Action>
        </SignIn.Strategy>

        <SignIn.Strategy name="reset_password_email_code">
          <h1 className='text-center mb-3'>Check your email</h1>
          <p className='text-center text-2xl'>We sent a code to <SignIn.SafeIdentifier />.</p>

          <Clerk.Field name="code" className="space-y-2">
            <Clerk.Label className="text-sm font-medium">Email code</Clerk.Label>
            <Clerk.Input className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
            <Clerk.FieldError className="block text-red-500 text-sm"/>
          </Clerk.Field>

          <SignIn.Action submit
          className="bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full"
          >Continue</SignIn.Action>
        </SignIn.Strategy>
      </SignIn.Step>

      <SignIn.Step name="forgot-password"
         className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <h1 className='text-center mb-3'>Forgot your password?</h1>

        <SignIn.SupportedStrategy name="reset_password_email_code" className='bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full'>
          Reset password
        </SignIn.SupportedStrategy>

        <SignIn.Action navigate="previous" className='hover:underline'>Go back</SignIn.Action>
      </SignIn.Step>

      <SignIn.Step name="reset-password"   
      className="py-10 px-8  border space-y-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-96"
      >
        <h1 className='text-center mb-3'>Reset your password</h1>

        <Clerk.Field name="password" className="space-y-2">
          <Clerk.Label className="text-sm font-medium">New password</Clerk.Label>
          <Clerk.Input  className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError className="block text-red-500 text-sm"/>
        </Clerk.Field>

        <Clerk.Field name="confirmPassword" className="space-y-2">
          <Clerk.Label className="text-sm font-medium">Confirm password</Clerk.Label>
          <Clerk.Input  className="w-full border rounded-md py-1.5 px-2.5 text-black"/>
          <Clerk.FieldError className="block text-red-500 text-sm"/>
        </Clerk.Field>

        <SignIn.Action submit
         className='bg-red-500 text-white rounded-md py-1.5 px-2.5 w-full'
        >Reset password</SignIn.Action>
      </SignIn.Step>
    </SignIn.Root>
    </section>  
  )
}