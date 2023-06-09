import { Route, Routes } from "react-router-dom"
import Header from "./containers/Header"
import { Home, Create, Single } from './pages'

const App = () => {
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
    </>
  )
}
export default App