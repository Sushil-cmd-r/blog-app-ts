import { Close } from "@mui/icons-material"
import { Dispatch, MutableRefObject, SetStateAction } from "react"

type PropsType = {
  image: string
  setImage?: Dispatch<SetStateAction<string>>
  imageInputRef?: MutableRefObject<HTMLInputElement | null>
}

const CoverImage = ({ image, setImage, imageInputRef }: PropsType) => {
  return (
    <>
      {!image ?
        "Loading Image..." :
        <img
          src={image}
          alt="cover-image"
          className="w-full h-full object-cover rounded-xl" />}

      {setImage &&
        <Close
          className="absolute top-3 right-3 cursor-pointer rounded-md bg-slate-200 hover:bg-slate-400"
          onClick={() => {
            setImage("")
            if (!imageInputRef?.current?.value) return
            imageInputRef.current.value = ""
          }}
        />}

    </>
  )
}
export default CoverImage