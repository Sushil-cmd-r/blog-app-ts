import { ReactElement, createContext, useMemo, useReducer } from "react"

const initialState: StateType = {
  user: null,
  status: "idle",
  error: null,
  authToken: ""
}

const AUTH_ACTION_TYPE = {
  AUTH_RESET: "AUTH_RESET",
  AUTH_START: "AUTH_START",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_FAILURE: "AUTH_FAILURE",
  AUTH_END: "AUTH_END"
}

export type AuthActionType = typeof AUTH_ACTION_TYPE

const authReducer = (state: StateType, action: AuthAction): StateType => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.AUTH_RESET:
      return { ...initialState }

    case AUTH_ACTION_TYPE.AUTH_START:
      return { ...initialState, status: "fetching" }

    case AUTH_ACTION_TYPE.AUTH_SUCCESS:
      if (!action.payload)
        throw new Error("NO PAYLOAD: AUTH_SUCCESS")
      return { ...initialState, ...action.payload }

    case AUTH_ACTION_TYPE.AUTH_FAILURE:
      if (!action.payload)
        throw new Error("NO PAYLOAD: AUTH_FAILURE")
      return { ...initialState, ...action.payload }

    case AUTH_ACTION_TYPE.AUTH_END:
      return { ...state, status: "idle" }

    default:
      return state;
  }
}

const useAuthContext = (initialState: StateType) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const AUTH_ACTIONS: AuthActionType = useMemo(() => {
    return AUTH_ACTION_TYPE
  }, [])

  return {
    state,
    dispatch,
    AUTH_ACTIONS
  }
}

type AuthContextType = ReturnType<typeof useAuthContext>

const initContextState: AuthContextType = {
  state: initialState,
  dispatch: () => { },
  AUTH_ACTIONS: AUTH_ACTION_TYPE
}

export const AuthContext = createContext<AuthContextType>(initContextState);

type ChildrenType = {
  children: ReactElement | ReactElement[]
}

export const AuthProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <AuthContext.Provider value={useAuthContext(initialState)}>
      {children}
    </AuthContext.Provider>
  )

}