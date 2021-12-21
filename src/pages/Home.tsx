import { useAuth } from "../context/AuthContext"

function Home() {
  const authContext = useAuth()

  return (
    <div>
      This is home.
      <button
        className="border border-red-500 text-red-500 p-2 rounded-sm m-1 hover:bg-red-400 hover:text-white transition-colors duration-200 ease-in-out"
        type="button"
        onClick={() => authContext?.logout()}
      >
        Logout
      </button>
    </div>
  )
}

export default Home