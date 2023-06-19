import { Route, Routes } from "react-router-dom"
import Header from "./containers/Header"
import { Home, Create, Single } from './pages'
import useModal from "./hooks/useModal";
import LoginModal from "./containers/LoginModal";
import { useScrollLock } from "./hooks/useScrollLock";
import { useEffect } from "react";

const App = () => {
  const { isModalOpen, closeModal } = useModal();
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (isModalOpen)
      lockScroll()
    else
      unlockScroll()

  }, [isModalOpen])

  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" index element={<Home />} />
        <Route path="/:blogId" element={<Single />} />

        {/* Protected Route */}
        <Route path="/create" element={<Create />} />
      </Routes>

      {isModalOpen && <LoginModal handleClose={closeModal} />}

    </>
  )
}
export default App