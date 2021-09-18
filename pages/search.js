import { format } from 'date-fns'
import { useRouter } from 'next/dist/client/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

function Search({ searchResult }) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuest } = router.query
  const formatedStartDate = format(new Date(startDate), 'dd mmm yy')

  const formatedEndDate = format(new Date(endDate), 'dd mmm yy')
  const range = `${formatedStartDate}-${formatedEndDate}`

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range}-for {noOfGuest} guest
          </p>
          <h1 className="text-2xl font-semibold mt-2 mb-4">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">cancellation Flexbility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          {searchResult.map(
            ({
              img,
              title,
              location,
              description,
              star,
              price,
              total,
              long,
              lat,
            }) => (
              <InfoCard
                key={img}
                img={img}
                title={title}
                location={location}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ),
          )}
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResult = await fetch(
    'https://links.papareact.com/isz',
  ).then((res) => res.json())
  return {
    props: {
      searchResult,
    },
  }
}
