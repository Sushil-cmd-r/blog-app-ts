import { useState, FormEvent, ChangeEvent } from "react"

import { Cancel, CheckCircle, Visibility, VisibilityOff } from "@mui/icons-material"
import { ReactComponent as Google } from '../assets/svgs/google.svg'

import { motion } from 'framer-motion'

type PropsType = {
  login: boolean
}

interface User {
  firstName?: string | undefined,
  lastName?: string | undefined,
  email: string,
  password: string,
}

const LoginForm = ({ login }: PropsType) => {
  const error = false;
  const initUser: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  const [cpassword, setCpassword] = useState("")
  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState<User>(initUser)


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Submitted User: ")
    console.log(user)
  }

  return (
    <form encType="multipart/form-data" className="w-full h-auto flex flex-col" onSubmit={handleSubmit}>
      {login && (
        <div className="h-10 flex w-full">
          <input
            type="text"
            placeholder="First Name"
            className="input"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />

        </div>
      )}
      <input
        type="text"
        placeholder="Email"
        className="input h-10"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />
      <div className="w-full h-10 flex relative">
        <input
          type={!visible ? "password" : "text"}
          placeholder="Password"
          className={`input ${!login && "border-b"}`}
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <span className="absolute right-0 h-full aspect-square flex items-center justify-center cursor-pointer text-slate-500" onClick={() => setVisible(!visible)}>
          {visible ?
            <Visibility fontSize="small" /> :
            <VisibilityOff fontSize="small" />}
        </span>
      </div>
      {login && (
        <div className="w-full h-10 flex relative">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input border-b-[1px]"
            value={cpassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCpassword(e.target.value)
            }}
          />
          <span className="absolute right-0 h-full aspect-square flex items-center justify-center cursor-pointer">
            {cpassword ?
              cpassword !== user.password ?
                <Cancel fontSize="small" className="text-[#FF6B6B]" /> :
                <CheckCircle fontSize="small" className="text-[#37C172]" /> : null}
          </span>
        </div>
      )}
      <p
        className="text-sm text-red-600 "
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        {error || "No error"}
      </p>
      <motion.button
        type="submit"
        className="blue-button flex items-center justify-center rounded-full h-10 mt-2 select-none"
        whileTap={{ scale: 0.9 }}
      >
        {login ? "Create Account" : "Sign in"}
      </motion.button>
      <motion.div className="flex items-center gap-2 h-10 justify-center border-[1px] border-[#D9D9DB] mt-3 hover:bg-[#D9D9DB] cursor-pointer select-none"
        whileTap={{ scale: 0.9 }}>
        <Google />
        <span>Sign {!login ? "In" : "Up"} with Google</span>
      </motion.div>
    </form >
  )
}
export default LoginForm