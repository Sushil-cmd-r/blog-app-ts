import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Header from "./Header"
import LoginModal from "./LoginModal"

import useModal from "../hooks/useModal"
import { useScrollLock } from "../hooks/useScrollLock"

const Layout = () => {
  const { isModalOpen } = useModal()
  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    if (isModalOpen)
      lockScroll()
    else
      unlockScroll()
  })


  return (
    <>
      <Header />
      <Outlet />
      <AnimatePresence mode="wait">
        {isModalOpen && <LoginModal />}
      </AnimatePresence>

    </>
  )
}
export default Layout