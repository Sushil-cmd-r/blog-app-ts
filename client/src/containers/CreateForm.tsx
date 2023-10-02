import { ChangeEvent, createRef, useState } from "react"

import { ImageOutlined } from "@mui/icons-material"
import _ from "lodash"

import CoverImage from "../components/CoverImage"
import Editor from "./Editor"

const CreateForm = () => {
  const initBlog: Blog = {
    title: "",
    body: ""
  }
  const [image, setImage] = useState("")
  const imageInputRef = createRef<HTMLInputElement>()
  const [blog, setBlog] = useState<Blog>(initBlog)

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e.target?.files[0];
    const imgUrl = URL.createObjectURL(file)

    setImage(imgUrl)
    console.log(imgUrl)
  }

  return (
    <div className="w-full h-full max-w-7xl mx-auto py-7 px-3">
      <form
        encType="multipart/form-data"
        className="h-full flex flex-col gap-6">

        <div className="flex justify-between">
          <label
            htmlFor="image"
            className="flex -ml-2 px-2 gap-1 hover:bg-[#D9D9D8] items-center py-1 rounded-md cursor-pointer "
          >
            <ImageOutlined />
            <input
              type="file"
              id="image"
              className="hidden"
              ref={imageInputRef}
              onChange={handleImage}
            />
            <span className="text-lg">Set Cover</span>
          </label>

          <button
            disabled={_.isEqual(blog, initBlog)}
            className="blue-button rounded-md px-4 disabled:bg-blue-300">
            Create
          </button>
        </div>

        <div className="relative"
          style={{
            height: image && "min(40vh, 200px)",
            display: image ? "block" : "none"
          }}
        >
          <CoverImage image={image} setImage={setImage} imageInputRef={imageInputRef} />
        </div>
        <div className="pb-2 border-b-2 border-slate-300 ">
          <input
            type="text" placeholder="Title..."
            className="h-full w-full text-4xl outline-none font-semibold "
            value={blog.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBlog(prev => {
                return { ...prev, title: e.target?.value }
              })
            }}
          />
        </div>

        <Editor blog={blog} setBlog={setBlog} />
      </form>
    </div>
  )
}
export default CreateForm