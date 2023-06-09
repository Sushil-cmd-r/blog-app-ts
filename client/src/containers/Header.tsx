import { memo, useState } from "react"
import { Link } from "react-router-dom"

import { motion } from 'framer-motion'
import { ReactComponent as Logo } from '../assets/svgs/logo.svg'

import Search from "../components/Search"
import { useMediaQuery } from "@mui/material"

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const isTablet = useMediaQuery('(min-width:600px)');

  console.log(isTablet)

  return (
    <header className="h-14 sm:h-16 w-full px-4">
      <div className="h-full w-full max-w-7xl mx-auto flex justify-between gap-3">

        {/* Logo */}
        <span className="h-full flex-grow sm:flex-grow-0">
          <Link to="/" className="w-full h-full flex items-center space-x-2 group">
            <Logo className="w-9 h-10 transition-transform ease group-hover:scale-125 group-hover:rotate-45" />
            <div className="text-3xl leading-10 font-medium flex gap-1 hidden sm:block group-hover:opacity-80">
              <span className="text-green-700 ">BLOG.</span>
              <span className="text-slate-600 ">APP</span>
            </div>
          </Link>
        </span>

        {/* Search */}
        <motion.div
          className="h-full flex items-center overflow-hidden justify-end sm:justify-center "
          animate={{
            width: (!searchOpen && !isTablet) ? 42 : 'auto'
          }}>
          <Search onSearch={() => setSearchOpen(prev => !prev)} />
        </motion.div>

        {/* Login */}
        <motion.div className="flex items-center space-x-1 whitespace-nowrap select-none"
        >
          <span className="hidden sm:inline">Create Account ,</span>
          <motion.span className="ml-1 link" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            Log In!
          </motion.span>
        </motion.div>

      </div>
    </header>
  )
}
export default memo(Header)