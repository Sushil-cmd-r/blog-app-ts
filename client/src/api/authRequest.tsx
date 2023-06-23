import { AxiosError } from "axios";
import axios from "./axios";

export const auth = (user: User, path: string): Promise<PayloadType> => {
  return new Promise<PayloadType>(async (resolve, reject) => {
    try {
      const { data } = await axios.post<User, any>(`/auth/${path}`,
        { ...user, username: user.email },
        {
          headers: { "content-type": "application/json" },
          withCredentials: true
        }
      );

      resolve({
        user: data.user,
        status: "success",
        authToken: data.token
      })
    } catch (err) {
      let error = {
        message: "Something went wrong",
        statusCode: 500
      }
      if (err instanceof AxiosError && err?.response) {
        error.message = err.response.data.message
        error.statusCode = Number(err.response.status)
      }

      reject({
        status: "failure",
        error: error,
      })
    }
  })

}

export const logout = (): Promise<boolean> => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      await axios.get("/auth/logout", { withCredentials: true });
      resolve(true)
    } catch (err) {
      reject(false)
    }
  })
}