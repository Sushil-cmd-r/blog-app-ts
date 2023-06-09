import { ArrowDropDown, Create } from "@mui/icons-material"
import { useMediaQuery } from "@mui/material"
import { motion } from 'framer-motion'
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const options = ['All Blogs', 'Technology', 'Cooking', 'Sports', 'Entertainment', 'Other']
  const [option, setOption] = useState(options[0])
  const [openOptions, setOpenOptions] = useState(false)

  const isTablet = useMediaQuery('(min-width:748px)');

  const handleSelect = (idx: number): void => {
    setOption(options[idx])
    setOpenOptions(prev => !prev)
  }

  return (
    <nav className="h-16 w-full px-4 flex items-center">
      <div className="relative w-full h-full max-w-7xl mx-auto border-b-2 flex items-center gap-2 md:flex-row-reverse">
        {/* Selected Option */}
        <span className="h-full flex items-center font-semibold text-sm md:text-base whitespace-nowrap md:hidden">
          {option}
        </span>

        {/* Create Button */}
        <Link to='/create' className="ml-auto">
          <motion.button className="blue-button h-8 rounded-md flex items-center gap-2 font-semibold text-sm md:text-base" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Create
            <span className="h-full aspect-square">
              <Create fontSize="small" />
            </span>
          </motion.button>
        </Link>

        {/* Options */}
        <div className="h-full flex items-center">
          <span className="bg-slate-200 h-8 px-2 py-1 hover:bg-slate-300 border-[1px] border-slate-300 cursor-pointer rounded-md border-2 flex items-center gap-2 font-semibold md:hidden select-none text-sm md:text-base" onClick={() => setOpenOptions(prev => !prev)}>
            {option}
            <span className="h-full aspect-square">
              <ArrowDropDown fontSize="small" />
            </span>
          </span>
        </div>

        {/* Dropdown options */}
        <motion.div className="absolute top-16 right-0 rounded-md overflow-hidden md:top-0 md:relative md:flex md:flex-row h-0 md:h-16"
          animate={{
            height: isTablet ? 64 : openOptions ? 'auto' : 0
          }}
        >
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`px-2 py-1 md:h-full md:flex md:items-center cursor-pointer bg-slate-200  md:bg-transparent md:hover:bg-transparent md:text-slate-600 md:font-semibold md:hover:text-black hover:bg-slate-300 relative ${opt === option ? 'bg-slate-300' : ''}`}
              style={{
                color: (opt == option) ? 'black' : ""
              }}
              onClick={() => handleSelect(idx)}
            >{opt}
              {opt === option && isTablet ? <motion.div className="absolute w-full h-[2px] bg-black left-0 bottom-0" layoutId="underline"></motion.div> : null}
            </div>
          ))}

        </motion.div>
      </div>
    </nav >
  )
}
export default Navbar