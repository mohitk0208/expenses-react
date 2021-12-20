import { useState } from "react"
import { useAuth } from "../context/AuthContext"


function Login() {

  const [error, setError] = useState<string | null>(null)

  const authContext = useAuth()

  async function loginHandler() {

    try {
      setError(null)
      const user = await authContext?.login()

      console.log(user);

    } catch (err) {
      setError("Login Failed. please try again")
      console.log(err);
    }



  }

  return (
    <div className="w-screen h-screen flex items-center justify-center" >
      {/**
       * make a error part that always exist but opacity is 0
       * when error is null opacity 0 and pointer events all
       * when error then opacity 1 with transition, red border and error in between
      */}
      <div className="p-5 border rounded-lg shadow-sm">
        <h1 className="text-gray-800 " >Login to <span className="font-bold" >Expense Tracker</span></h1>

        <button
          className="font-bold text-amber-300 border border-amber-300 p-3 rounded-lg w-full mt-4 hover:bg-amber-300 hover:text-white transition-colors duration-200 "
          type="button"
          onClick={loginHandler}
        >
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default Login