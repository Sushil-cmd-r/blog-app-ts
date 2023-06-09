import Blog from "../components/Blog"

const Blogs = () => {
  return (
    <section className="flex flex-col">
      {
        [...Array(8)].map((_, idx) =>
          <Blog key={idx} />)
      }
    </section>
  )
}
export default Blogs