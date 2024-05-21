import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import { SignedIn,SignedOut ,UserProfile } from '@clerk/nextjs'


export default function Home() {
  return (
    <>
    <NavBar />
     <div className="bg-home-bg bg-cover bg-blend-multiply bg-neutral-600 w-full h-screen flex justify-center items-center">
       <SignedIn>
       <h1 className="  sm:text-lg md:text-2xl lg:text-8xl xl:text-6xl 2xl:text-8xl  text-red-400 text-center">Welcome to Lux Home  enjoy the site  </h1>
      </SignedIn>
      
      <SignedOut>
      <h1 className=" text-xl w-[75%] text-red-400 text-center line-h">Welcome to Lux Home please login to enjoy the site </h1>
      </SignedOut>
     </div>
     </>
  );
}
