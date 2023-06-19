import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Blogs from "../containers/Blogs"
import Sidebar from "../containers/Sidebar"

const Home = () => {
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
}
export default Home