import { useState } from "react"

import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material"
import image from '../assets/images/image.jpg'
import { Avatar } from "@mui/material"

import { Link } from "react-router-dom"

const Blog = () => {
  const [like, setLike] = useState(false)

  return (
    <article className="col-span-1 rounded-2xl overflow-hidden shadow-md hover:shadow-lg">
      {/* Blog Image */}
      <div className="relative flex flex-col bg-cover bg-center min-h-[200px] text-xl md:text-2xl font-semibold text-white p-4 flex-1 shadow-md hover:shadow-lg">

        <div className="absolute w-full h-full top-0 left-0 -z-10">
          <img src={image} alt="#" className="w-full h-full object-cover" />
          <div className='absolute top-0 left-0 z-0 w-full h-full transition-colors ease-in-out bg-[#00000055] group-hover:bg-[#00000088]' />
        </div>

        <span className="ml-auto cursor-pointer transition-all hover:scale-150 hover:text-blue-400">
          <Edit />
        </span>
        {/* Blog title */}
        <div className="mt-auto flex justify-between">
          <Link to="/123" className="cursor-pointer flex-1 hover:text-gray-300">
            Blog Name
          </Link>
          {/* Likes */}
          <span
            className="cursor-pointer transition-all hover:scale-150"
            onClick={() => setLike((prev) => !prev)}>
            {like ? <Favorite /> : <FavoriteBorder />}
          </span>
        </div>

      </div>

      {/* Blog Meta */}
      <Link to="/123">
        <div className="px-4 py-2 cursor-pointer group border-[1px] border-t-0">
          <span className="text-sm md:text-base font-semibold">Article</span>
          {/* Blog body */}
          <p className="text-sm md:text-base text-gray-600 text-ellipsis line-clamp-1 md:line-clamp-2 group-hover:underline">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            eius, in vero atque ut minima totam, nulla adipisci quis,
            perferendis ipsa. Accusantium atque doloremque totam deserunt unde
            odio cupiditate officia.
          </p>
          <div className="flex items-center mt-2 justify-between">
            {/* Author */}
            <div className="flex gap-1 md:gap-2 items-center">
              <Avatar className="scale-75 md:scale-100" />
              <span className="text-sm md:text-base font-semibold">
                Author Name
              </span>
            </div>
            {/* Likes */}
            <span className="text-[10px] md:text-sm text-gray-600">
              20 Likes
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
export default Blog