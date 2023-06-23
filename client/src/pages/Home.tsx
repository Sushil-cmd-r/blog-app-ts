import { memo, useMemo } from "react"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Blogs from "../containers/Blogs"
import Sidebar from "../containers/Sidebar"
import { Outlet } from "react-router-dom"

const Home = () => {

  const content = useMemo(() => {
    return (
      <main className="w-full h-full relative">
        <Banner />
        <Navbar />
        <section className="w-full h-full max-w-7xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6 relative">
          <Blogs />
          <Sidebar />
        </section>


      </main>
    )
  }, [])

  return (
    <>
      {content}
      <Outlet />
    </>
  )
}
export default memo(Home)