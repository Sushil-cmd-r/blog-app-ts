import { useEffect } from "react";

import { Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import useModal from "../hooks/useModal";


const RequiredAuth = () => {
  const { state } = useAuth()
  const { openModal } = useModal()

  useEffect(() => {
    if (state.user === null)
      openModal()
  }, [state.user])

  return <Outlet />
}

export default RequiredAuth