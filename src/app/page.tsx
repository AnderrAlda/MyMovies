import { Console } from "console";
import Link from "next/link";
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { getMyImages } from "~/server/queries";
import Image from "next/image";
export const dynamic = "force-dynamic";



const Images = async () => {


  const images = await getMyImages();


  return (
    <div>


      {

        images.map((image) => (
          <div key={image.id} className="w-1/3 p-4">
            <p className="text-black">{image.name}</p>
            <Image src={image.url} alt={image.name} style={{ objectFit: "contain" }} fill />
          </div>
        ))
      }</div>
  )
}


export default async function HomePage() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b  text-white text-center">
      <SignedOut>
        <p className="text-black">Please Sign In</p>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>

    </main>
  );
}
