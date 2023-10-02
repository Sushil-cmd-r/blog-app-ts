import { Route, Routes, useLocation } from "react-router-dom"

import { Home, Create, Single } from './pages'

import Layout from "./containers/Layout"
import LoginModal from "./containers/LoginModal";
import { useEffect } from "react";
import { useScrollLock } from "./hooks/useScrollLock";

const App = () => {
  const location = useLocation();

  const state = location.state as { background: Location }

  const { lockScroll, unlockScroll } = useScrollLock()

  useEffect(() => {
    if (location.pathname === "/login")
      lockScroll()
    else
      unlockScroll()
  }, [location.pathname])

  return <>
    <Routes location={state?.background || location} >
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="create" element={<Create />} />

        <Route path=":blogId" element={<Single />} />

      </Route>

    </Routes >

    {state?.background &&
      <Routes >
        <Route path='/login' element={<LoginModal />} />
      </Routes>
    }
  </>

}
export default App