import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'

// react date range style
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useRouter } from 'next/dist/client/router'

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuest, setNoOfGuest] = useState(1)

  const router = useRouter()

  const handelSelection = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const resetInput = () => {
    setSearchInput('')
  }
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    })
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  return (
    <header className="sticky bg-white top-0 z-50 grid grid-cols-3 bg-white-100 shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative flex h-10 cursor-pointer my-auto items-center"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'start your search'}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 m-auto mt-2">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handelSelection}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>
            <UsersIcon className="h-8" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-3 outline-none text-lg text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
