import { Route, Routes } from "react-router-dom"

import { Home, Create, Single } from './pages'

import RequiredAuth from "./containers/RequiredAuth"
import Layout from "./containers/Layout"


const App = () => {
  return <>

    <Routes>
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

  </>

}
export default App