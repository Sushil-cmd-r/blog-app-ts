import { Dispatch, SetStateAction } from "react"

type PropsType = {
  blog: Blog,
  setBlog: Dispatch<SetStateAction<Blog>>
}

const Editor = ({ blog, setBlog }: PropsType) => {
  return (
    <div>Editor</div>
  )
}
export default Editor