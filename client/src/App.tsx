import { Route, Routes, useLocation } from "react-router-dom"

import { Home, Create, Single } from './pages'

import RequiredAuth from "./containers/RequiredAuth"
import Layout from "./containers/Layout"
import LoginModal from "./containers/LoginModal"


const App = () => {
  let location = useLocation();

  const previousLocation = location.state?.previousLocation

  console.log(previousLocation)
  return <>

    <Routes location={previousLocation || location}>
      <Route path="/" element={<Layout />}>

        {/* Public Routes */}
        <Route index element={<Home />} />

        <Route path="/:blogId" element={<Single />} />

        {/* Protected Route */}
        <Route element={<RequiredAuth />}>
          <Route
            path="/create" element={<Create />} />
        </Route>
      </Route>

    </Routes >

    {
      (previousLocation) && (
        <Routes>
          <Route path="/auth" element={<LoginModal />} />
        </Routes>
      )
    }

  </>

}
export default App