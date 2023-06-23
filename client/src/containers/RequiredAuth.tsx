import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequiredAuth = () => {
  const location = useLocation()
  const { state } = useAuth()

  const content = state.user ?
    <Outlet /> :
    <Navigate to="/auth" replace state={{ from: location, previousLocation: location.state?.background }} />
  // <LoginModal />


  return content
}
export default RequiredAuth