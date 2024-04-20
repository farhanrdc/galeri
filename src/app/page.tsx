
import { db } from "~/server/db";

export const dynamic= "force-dynamic"

// const mockUrls = [
//   "https://utfs.io/f/c0a092d6-2382-4e02-9629-8ed53d7f6ab6-2zf.jpg",
//   "https://utfs.io/f/bc37e2f4-337d-4174-9842-58b259f59fca-n8tvv3.jpg",
//   "https://utfs.io/f/aced9a01-f543-4ea8-a8dd-6db2ea998e07-23idy.png",
//   "https://utfs.io/f/81682c94-bf7e-45fd-895e-f6d82b2ab1b2-2oo.png"
// ]

// const mockImage = mockUrls.map((url, index) => ({
//   id: index +1,
//   url,
// }))

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (image, {desc}) => desc(image.id)
  })
  return (
    <main className="text-white">
      <div className="flex flex-wrap gap-4 items-end">
      
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-52">
            <img src={image.url} alt="Image" />
            <h3>{image.name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
