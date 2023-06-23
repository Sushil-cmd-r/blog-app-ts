import { useEffect } from "react"
import { Outlet } from "react-router-dom"

import Header from "./Header"

import useModal from "../hooks/useModal"
import { useScrollLock } from "../hooks/useScrollLock"
import LoginModal from "./LoginModal"
import { AnimatePresence } from "framer-motion"

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