import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white-100 shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex h-10 cursor-pointer my-auto items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle section */}
      <div className="flex md:border-2 rounded-full py-2 md:shadow-sm text-sm text-gray-500">
        <input
          type="text"
          placeholder="start your search"
          className="pl-5 bg-transparent outline-none flex-grow"
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full p-2 mr-1 cursor-pointer text-white hidden md:inline-flex" />
      </div>
      {/* right side */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-8 cursor-pointer" />

        <div className="flex space-x-2 border-2 rounded-full p-2 items-center cursor-pointer">
          <MenuIcon className="h-8" />
          <UserCircleIcon className="h-8" />
        </div>
      </div>
    </header>
  )
}

export default Header
