const Sidebar = () => {
  return (
    <aside className="  hidden sm:block sm:col-span-1 z-3 flex flex-col">
      <section className="h-28">
        Recent Blogs
      </section>
      <div className="h-28 sticky top-16">
        Pagination
      </div>
    </aside>
  )
}
export default Sidebar