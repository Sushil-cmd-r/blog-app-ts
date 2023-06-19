import { Link } from 'react-router-dom'
import image from '../assets/images/image.jpg'

const Banner = () => {
  return (
    <section className="w-full relative group" style={{
      height: 'clamp(40vh, calc(100vh - 64px) ,400px)'
    }}>
      {/* Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img src={image} alt="" className='h-full w-full object-cover' />
        <div className='absolute top-0 left-0 z-0 w-full h-full transition-colors ease-in-out bg-[#00000077]' />
      </div>

      {/* Content */}
      <Link to='/123' className='h-full w-full z-10 max-w-7xl mx-auto px-3 py-4 flex flex-col gap-3 text-white' >
        <span className='w-4/5 max-w-[55rem] mt-auto text-3xl md:text-4xl text-ellipsis line-clamp-2 font-semibold group-hover:underline'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, harum!
        </span>
        <div className='text-md md:text-lg flex justify-between'>
          <span>- Author</span>
          <span>Created At</span>
        </div>

      </Link>
    </section >
  )
}
export default Banner