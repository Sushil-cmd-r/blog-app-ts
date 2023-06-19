import Backdrop from "./Backdrop"
import { ReactComponent as Login } from '../assets/svgs/login.svg'
import { Cancel } from "@mui/icons-material"
import { useState } from "react"
import LoginForm from "../components/LoginForm"

type PropsType = {
  handleClose: () => void
}

const LoginModal = ({ handleClose }: PropsType) => {

  const [login, setLogin] = useState(false);

  return (
    <Backdrop onClick={handleClose}>
      <div
        className="modal-dim rounded-md bg-white relative flex flex-col pb-8"
        onClick={e => e.stopPropagation()}>

        {/* Close Button */}
        <Cancel fontSize="small" className="absolute cursor-pointer text-slate-200 hover:text-slate-300 -top-6 -right-0 md:-right-3 " onClick={handleClose} />

        {/* modal header */}
        <div className="px-7 h-20 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold">
            {login ? "Create Account" : "Sign In"}
          </h1>
          <p className="text-xs">
            <span className="hidden md:inline select-none">
              {login
                ? "Already have an account?"
                : "Don't have an account yet?"}
            </span>
            <span className="link select-none" onClick={() => setLogin(!login)}>
              {login ? " Sign In" : " Create new for free!"}
            </span>
          </p>
        </div>

        {/* modal body */}
        <div className="h-full w-full px-7 flex justify-center overflow-auto">
          <div className="flex-1 h-full sm:max-w-[50%]">
            <LoginForm login={login} />
          </div>
          <div className="flex-1 hidden sm:block sm:max-w-[50%]">
            <Login className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </Backdrop>
  )
}
export default LoginModal