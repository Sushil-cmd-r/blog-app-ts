import Blog from "../components/Blog"

const Blogs = () => {
  return (
    <section className="w-full h-full col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {
        [...Array(8)].map((_, idx) =>
          <Blog key={idx} />)
      }
    </section >
  )
}
export default Blogs