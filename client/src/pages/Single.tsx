import CoverImage from "../components/CoverImage"
import Image from "../assets/images/image.webp"
import { Avatar } from "@mui/material"
import Markdown from "react-markdown"

const Single = () => {
  return (
    <>
      <div className="w-full h-full max-w-7xl mx-auto py-4 px-3">
        {/* Image */}
        <section className="h-[50vh] min-h-[400px] max-h-[600px]">
          <CoverImage image={Image} />
        </section>
        {/* Blog meta */}
        <section className="mt-6 flex items-center flex-col my-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-center">Lorem ipsum dolor sit.</h1>
          <div className="flex gap-6 items-center text-sm md:text-xl ">

            <div className="flex items-center gap-2 my-3">
              <Avatar />
              <span className="font-semibold">Author Name</span>
            </div>
            |<span>26 May 2022</span>

          </div>
        </section>
        {/* Blog Body */}
        <section>
          <Markdown
            className="w-full pb-6 markdown-styles "
            children={"Nothing to Show Here"} // blog body
          />
        </section>
      </div>
    </>
  )
}
export default Single