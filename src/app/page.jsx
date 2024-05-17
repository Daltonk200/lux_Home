import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
    <NavBar />
     <div className="bg-home-bg bg-cover bg-blend-multiply bg-neutral-600 w-full h-screen flex justify-center items-center">
       <h1 className=" text-8xl w-[75%] text-red-400 text-center line-h">Welcome to Lux Home please login to enjoy the site </h1>
     </div>
     </>
  );
}
