import { memo, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { motion } from 'framer-motion'
import { ReactComponent as Logo } from '../assets/svgs/logo.svg'

import Search from "../components/Search"
import { Avatar, useMediaQuery } from "@mui/material"

import useAuth from "../hooks/useAuth"

import { logout } from "../api/authRequest"

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const isTablet = useMediaQuery('(min-width:600px)');

  const { state, dispatch, AUTH_ACTIONS } = useAuth()
  const location = useLocation()

  const handleLogout = async () => {
    let success = false;
    try {
      success = await logout()
    } catch (err) {
      success = false
    } finally {
      if (success) {
        dispatch({ type: AUTH_ACTIONS.AUTH_RESET })
      }
    }
  }

  return (
    <header className="h-14 sm:h-16 w-full px-4">
      <div className="h-full w-full max-w-7xl mx-auto flex justify-between gap-3">

        {/* Logo */}
        <span className="h-full flex-grow sm:flex-grow-0">
          <Link to="/" className="w-max h-full flex items-center space-x-2 group">
            <Logo className="w-9 h-10 transition-transform ease group-hover:scale-125 group-hover:rotate-45" />
            <div className="text-3xl leading-10 font-medium flex gap-1 hidden sm:block group-hover:opacity-80">
              <span className="text-green-700 ">BLOG.</span>
              <span className="text-slate-600 ">APP</span>
            </div>
          </Link>
        </span>

        {/* Search */}
        <motion.div
          className="h-full w-[42px] sm:w-80 flex items-center overflow-hidden justify-end sm:justify-center "
          animate={{
            width: (!searchOpen && !isTablet) ? 42 : 'auto'
          }}>
          <Search onSearch={() => setSearchOpen(prev => !prev)} />
        </motion.div>

        {/* Login */}
        <motion.div className="flex items-center space-x-1 whitespace-nowrap select-none"
        >
          {state.user === null ?
            <Link to="/login" state={{ background: location }}>
              <span className="hidden sm:inline">Create Account ,</span>
              <motion.span className="ml-1 link" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}
              >
                Log In!
              </motion.span>
            </Link> :
            <span onClick={handleLogout}>
              <div className="link text-sm hidden sm:block">
                <span className="text-slate-600">Welcome, </span>
                <motion.span whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                  {state.user.firstName + " " + state.user.lastName}
                </motion.span>
              </div>
              <div className="h-3/4 sm:h-2/3 aspect-square flex items-center sm:hidden">
                <Avatar sx={{ width: 35, height: 35 }} />
              </div>
            </span>
          }
        </motion.div>

      </div>
    </header>
  )
}
export default memo(Header)