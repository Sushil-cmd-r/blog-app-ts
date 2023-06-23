import { useState, FormEvent, ChangeEvent, useEffect } from "react"

import { Cancel, CheckCircle, Visibility, VisibilityOff } from "@mui/icons-material"
import { ReactComponent as Google } from '../assets/svgs/google.svg'
import { ReactComponent as Loading } from "../assets/svgs/loading.svg"

import { motion } from 'framer-motion'

import { auth } from "../api/authRequest"
import useAuth from "../hooks/useAuth"
import { useLocation, useNavigate } from "react-router-dom"

type PropsType = {
  login: boolean
}

const LoginForm = ({ login }: PropsType) => {
  const initUser: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  const [cpassword, setCpassword] = useState("")
  const [visible, setVisible] = useState(false)
  const [userInput, setUserInput] = useState<User>(initUser)
  const [path, setPath] = useState("login")

  const { state, dispatch, AUTH_ACTIONS } = useAuth()

  useEffect(() => {
    if (!login)
      setPath("login")
    else
      setPath("register")
  }, [login])

  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: AUTH_ACTIONS.AUTH_START })
    try {
      const payload = await auth(userInput, path)
      console.log(payload)
      dispatch({ type: AUTH_ACTIONS.AUTH_SUCCESS, payload: payload })
      navigate(location.state?.from ?? "/")

    } catch (err) {
      dispatch({ type: AUTH_ACTIONS.AUTH_FAILURE, payload: err as PayloadType })

    }

  }

  useEffect(() => {
    let isMounted = true;

    if (state.status !== "success" && isMounted)
      dispatch({ type: AUTH_ACTIONS.AUTH_RESET })

    return () => {
      isMounted = false;
    }
  }, [state.user])

  return (
    <form encType="multipart/form-data" className="w-full h-auto flex flex-col" onSubmit={handleSubmit}>
      {login && (
        <div className="h-10 flex w-full">
          <input
            type="text"
            placeholder="First Name"
            className="input"
            value={userInput.firstName}
            onChange={(e) => {
              setUserInput({ ...userInput, firstName: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            value={userInput.lastName}
            onChange={(e) => {
              setUserInput({ ...userInput, lastName: e.target.value });
            }}
          />

        </div>
      )}
      <input
        type="text"
        placeholder="Email"
        className="input h-10"
        value={userInput.email}
        onChange={(e) => {
          setUserInput({ ...userInput, email: e.target.value });
        }}
      />
      <div className="w-full h-10 flex relative">
        <input
          type={!visible ? "password" : "text"}
          placeholder="Password"
          className={`input ${!login && "border-b"}`}
          value={userInput.password}
          onChange={(e) => {
            setUserInput({ ...userInput, password: e.target.value });
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
              cpassword !== userInput.password ?
                <Cancel fontSize="small" className="text-[#FF6B6B]" /> :
                <CheckCircle fontSize="small" className="text-[#37C172]" /> : null}
          </span>
        </div>
      )}
      <p
        className="text-sm text-red-600 "
        style={{ visibility: state.error !== null ? "visible" : "hidden" }}
      >
        {state.error?.message || "No error"}
      </p>
      <motion.button
        type="submit"
        className="blue-button flex items-center justify-center rounded-full h-10 mt-2 select-none"
        disabled={state.status === 'fetching'}
        whileTap={{ scale: 0.9 }}
      >
        {state.status === 'fetching' ?
          <>
            <Loading className="inline w-4 h-4 mr-3 text-white animate-spin" />
            Loading...
          </>
          : login ? "Create Account" : "Sign in"}
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