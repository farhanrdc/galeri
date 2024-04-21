
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { getMyImages } from "~/server/queries";

export const dynamic= "force-dynamic"

async function Images() {
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap gap-12 items-end justify-center">
      {images.map((image) => (
        <div key={image.id} className="w-52">
          <img src={image.url} alt="Image" />
          <h3>{image.name}</h3>
        </div>
      ))}
    </div>
    
  );
}

export default async function HomePage() {
 
  return (
    <main className="text-white w-full">
      <SignedOut>
        <div className="w-full text-2xl h-full text-center">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        {/* @ts-expect-error Server Component */}
        <Images />
      </SignedIn>
    </main>
  );
}
