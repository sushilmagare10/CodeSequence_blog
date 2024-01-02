import CardList from '@/components/Home/CardList'
import Hero from '@/components/Home/Hero'
import HomeSidebar from '@/components/SideBar/HomeSidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <Hero />
      <div className='flex flex-col lg:flex lg:flex-row gap-10 mt-7 md:px-24 md:mx-5 lg:px-0 lg:mx-0 rounded-lg'>
        <CardList />
        <HomeSidebar />
      </div>
    </div>
  )
}
