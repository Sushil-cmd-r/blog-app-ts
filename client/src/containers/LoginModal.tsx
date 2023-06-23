import Backdrop from "./Backdrop"
import { ReactComponent as Login } from '../assets/svgs/login.svg'
import { Cancel } from "@mui/icons-material"
import { useState } from "react"
import LoginForm from "../components/LoginForm"


import { motion } from 'framer-motion'
import useModal from "../hooks/useModal"
import { useLocation, useNavigate } from "react-router-dom"

const LoginModal = () => {
  const [login, setLogin] = useState(false);
  const { closeModal } = useModal()
  const location = useLocation()
  const navigate = useNavigate()


  console.log(location)

  const handleClose = () => {
    closeModal()
    if (location.pathname !== "/") {
      navigate("/")
    }

  }
  const modalAnimation = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      scale: 0
    }
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal-dim rounded-md bg-white relative flex flex-col pb-8"
        onClick={e => e.stopPropagation()}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

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
            <span className="link select-none" onClick={() => setLogin(prev => !prev)}>
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
      </motion.div>
    </Backdrop>
  )
}
export default LoginModal