import { Console } from "console";
import Link from "next/link";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from '@clerk/nextjs'


export const dynamic = "force-dynamic";



const Images = async () => {
  const images = await db.query.posts.findMany(
    {
      orderBy: (model, { desc }) => desc(model.id),
    }
  );

  return (
    <div>   {
      images.map((image) => (
        <div key={image.id} className="w-1/3 p-4">
          <p className="text-black">{image.name}</p>
          <img src={image.url} alt="image" />

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
