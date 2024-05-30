import { Console } from "console";
import Link from "next/link";
import { db } from "~/server/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {

  const images = await db.query.posts.findMany(
    {
      orderBy: (model, { desc }) => desc(model.id),
    }
  );





  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b  text-white">

      {
        images.map((image) => (
          <div key={image.id} className="w-1/3 p-4">
            <p className="text-black">{image.name}</p>
            <img src={image.url} alt="image" />

          </div>
        ))
      }
    </main>
  );
}
