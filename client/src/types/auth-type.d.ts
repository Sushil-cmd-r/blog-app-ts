interface UserResponse {
  id: string
  firstName: string
  lastName: string
  username: string
}

type ErrorType = {
  message: string,
  statusCode: number
}

type StateType = {
  user: UserResponse | null
  status: "idle" | "fetching" | "success" | "failure"
  error: ErrorType | null
  authToken: string
}

type PayloadType = {
  user?: UserResponse
  status: "idle" | "fetching" | "success" | "failure"
  error?: ErrorType
  authToken?: string
}

type AuthAction = {
  type: string,
  payload?: PayloadType
}