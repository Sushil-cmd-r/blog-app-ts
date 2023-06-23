import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import useModal from "../hooks/useModal";


const RequiredAuth = () => {
  const location = useLocation()
  const { state } = useAuth()
  const { openModal } = useModal()

  useEffect(() => {
    if (state.user === null)
      openModal()
  }, [state.user])

  const content = <Outlet />

  return content
}
export default RequiredAuth