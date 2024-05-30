import { Console } from "console";
import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  const temporalimages = [
    { id: 1, url: "https://utfs.io/f/2f8a26f4-58ff-40da-85d2-13cb9f39dfbd-1nq2cb.jpg" },
    { id: 2, url: "https://utfs.io/f/7f4b85f4-3df5-4a34-a9bf-1706294a4f63-orkbes.jpg" },
    { id: 3, url: "https://utfs.io/f/253e29ed-034a-407a-8a1d-4a59f9a06d0a-xto2or._V1_.jpg" }
  ]



  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b  text-white">
      {
        temporalimages.map((image) => (
          <div key={image.id} className="w-1/3 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))
      }
      {
        posts.map((post) => (
          <div key={post.id} className="w-1/3 p-4">
            <p className="text-black">{post.name}</p>
          </div>
        ))
      }
    </main>
  );
}
