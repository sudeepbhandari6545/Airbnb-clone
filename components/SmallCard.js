import Image from 'next/image'

function SmallCard({ img, distance, location }) {
  return (
    <div className="flex m-2 mt-5 space-x-4 items-center rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
