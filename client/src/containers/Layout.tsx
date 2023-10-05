import { Outlet } from "react-router-dom"

import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full relative">
        <Outlet />
      </main>
    </>
  )
}
export default Layout