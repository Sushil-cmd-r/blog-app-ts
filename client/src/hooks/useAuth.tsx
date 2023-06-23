import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { state, dispatch, AUTH_ACTIONS } = useContext(AuthContext)

  return { state, dispatch, AUTH_ACTIONS }
}

export default useAuth;