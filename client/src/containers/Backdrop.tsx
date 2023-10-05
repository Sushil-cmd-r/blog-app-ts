import { ReactNode } from "react"

type PropsType = {
  children: ReactNode | ReactNode[],
  onClick: () => void
}

const Backdrop = ({ children, onClick }: PropsType) => {

  return (
    <div
      className="fixed top-0 left-0 h-full w-full z-40 bg-[#000000be] flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </div >

  )
}
export default Backdrop