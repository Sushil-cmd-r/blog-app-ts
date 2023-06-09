import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Blogs from "../containers/Blogs"
import Sidebar from "../containers/Sidebar"

const Home = () => {
  return (
    <main className="w-full h-full overflow-x-hidden">
      <Banner />
      <Navbar />
      <section>
        <Blogs />
        <Sidebar />
      </section>

    </main>
  )
}
export default Home