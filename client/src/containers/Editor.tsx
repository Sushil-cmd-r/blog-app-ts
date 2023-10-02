import { Cancel, Visibility, VisibilityOff } from "@mui/icons-material"
import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { Dispatch, SetStateAction, createRef, useState, KeyboardEvent } from "react"
import Markdown from "react-markdown"

type PropsType = {
  blog: Blog,
  setBlog: Dispatch<SetStateAction<Blog>>
}

type ToolItemPropType = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  }
  text: String
  onClick: () => void,
  customStyle?: Object
}

const Editor = ({ blog, setBlog }: PropsType) => {
  const textAreaRef = createRef<HTMLTextAreaElement>()

  const [preview, setPreview] = useState<Boolean>(false)
  const [height, setHeight] = useState("300px");
  const [tags, setTags] = useState<String[]>([])

  const resize = ($el: any) => {
    $el.target.style.minHeight = $el.target.scrollHeight + "px";
    setHeight($el.target.scrollHeight + "px");
  }

  const handleClear = () => {
    if (textAreaRef.current === null) return
    textAreaRef.current.value = "";
    setBlog({ ...blog, body: "" });
    textAreaRef.current.focus();
    setHeight("56px");
  };

  const handleTagInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return
    if (e.target === null) return

    const target = e.target as HTMLInputElement

    const value = target.value
    if (!value.trim()) return

    setTags([...tags, value])
    target.value = ""
  }

  const removeTag = (idx: number) =>
    setTags(tags.filter((_, i) => i !== idx))

  const ToolItem = ({ Icon, text, onClick, customStyle = {} }: ToolItemPropType) => {
    return (
      <span className="flex items-center gap-2 bg-transparent hover:bg-gray-300 px-3 py-1 rounded cursor-pointer"
        onClick={onClick}
        style={customStyle}
      >
        <Icon className="text-gray-500" fontSize="small" />
        {text}
      </span>
    )
  }

  return (
    <>
      {/* Tool Bar */}
      <div className="w-full h-10 rounded flex items-center px-1 bg-gray-100">
        <ToolItem
          Icon={Cancel}
          text="Clear"
          onClick={handleClear}
          customStyle={{ marginLeft: "auto", pointerEvents: preview && "none" }}
        />

        <ToolItem
          Icon={preview ? VisibilityOff : Visibility}
          text="Preview"
          onClick={() => setPreview(!preview)}
        />
      </div>

      {/* Tags */}
      <div className="border-2 border-gray-200 rounded-md w-full flex flex-wrap items-center gap-2">

        {tags.map((tag, index) => (
          <div className="text-xs flex items-center justify-center font-bold leading-sm uppercase px-3 rounded-full text-gray-700 border gap-1 bg-slate-300"
            style={{ marginLeft: index === 0 ? "12px" : "" }}
            key={index}>
            {tag}
            <span className="mb-[1.2px] text-base cursor-pointer" onClick={() => removeTag(index)}>&times;</span>
          </div>
        ))}
        <input className="p-3 outline-none border-none flex-1" onKeyDown={handleTagInput} type="text" placeholder="Enter Tags..." />
      </div>

      {/* Text Area */}
      {!preview ?
        <textarea
          ref={textAreaRef}
          className="w-full px-1 outline-none resize-none text-lg overflow-hidden"
          style={{ minHeight: height }}
          onInput={(textAreaRef) => resize(textAreaRef)}
          onKeyDown={(textAreaRef) => resize(textAreaRef)}
          value={blog.body}
          onChange={e => setBlog({ ...blog, body: e.target.value })}
          placeholder="Start Here..."
        /> :
        <Markdown
          className="w-full px-2 pb-6 markdown-styles"
          children={blog.body || "Nothing to Show Here"}
        />
      }
    </>
  )
}
export default Editor