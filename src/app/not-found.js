import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <section class=" flex items-center justify-center w-full p-6">

<div class="max-w-screen-lg mx-auto  shadow-lg rounded-lg overflow-hidden">
    

    <main class="flex  items-center p-12   relative">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold ">Oops... we have <span class="text-red-400">a problem</span> here</h1>
            <h2 class="text-9xl font-extrabold ">4<span className='text-red-400'>0</span>4</h2>
            <a href="#" class="mt-4 inline-block px-6 py-2 bg-red-400 text-white rounded-full hover:bg-red-500">Back home</a>
        </div>

        <div class="mb-8  a top-5 right-1 -z-5">
            <Image src="/not-foung-img/preventive-maintenance-service-construction-worker-business-maintenance-3d-villain-removebg-preview.png" width={300} height={100} alt="Error Image" class="max-w-full h-auto w-[25rem] "/>
        </div>
    </main>

   
</div>

</section>

    </div>
  )
}



