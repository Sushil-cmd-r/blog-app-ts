import image from '../assets/images/image.webp'
import Pagination from '../components/Pagination'

const Sidebar = () => {
  return (
    <aside className=" sm:col-span-1 z-3 flex flex-col">
      <section className="hidden sm:flex flex-col items-center mb-8">
        <span className="text-2xl font-medium">POPULAR BLOGS</span>
        <hr className="w-full my-2 border-t-2" />
        <ul>
          <li className='flex p-1 gap-2 cursor-pointer group items-center  justify-center'>
            <div className='w-[30%] md:w-[40%] lg:w-[25%] h-full rounded-md overflow-hidden'>
              <img src={image} className='w-full object-cover' />
            </div>
            <p className='w-[70%] md:w-[60%] lg:w-[75%] line-clamp-2  group-hover:underline'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>

          <li className='flex p-1 gap-2 cursor-pointer group items-center  justify-center'>
            <div className='w-[30%] md:w-[40%] lg:w-[25%] h-full rounded-md overflow-hidden'>
              <img src={image} className='w-full object-cover' />
            </div>
            <p className='w-[70%] md:w-[60%] lg:w-[75%] line-clamp-2  group-hover:underline'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>

          <li className='flex p-1 gap-2 cursor-pointer group items-center  justify-center'>
            <div className='w-[30%] md:w-[40%] lg:w-[25%] h-full rounded-md overflow-hidden'>
              <img src={image} className='w-full object-cover' />
            </div>
            <p className='w-[70%] md:w-[60%] lg:w-[75%] line-clamp-2  group-hover:underline'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>

        </ul>

      </section>
      {/* Pagination */}
      <section className="flex justify-center sticky top-20">
        <Pagination />
      </section>
    </aside >
  )
}
export default Sidebar