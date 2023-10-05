import { useLocation, useNavigate, Outlet, NavigateOptions } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const RequireAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useAuth();

  // Check whether logged in or not
  // Else redirect to login
  const options: NavigateOptions = {
    state: {
      // this will be the background of modal
      background: location,
      // this is where user will be navigated on successfull login
      from: location.pathname
    },
    replace: true
  }

  useEffect(() => {
    if (!state.user)
      navigate("/login", options)
  }, [])

  return (
    <Outlet />
  )
}
export default RequireAuth