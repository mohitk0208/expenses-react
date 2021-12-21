import { useAuth } from "../../context/AuthContext"

function Dashboard() {

  const authContext = useAuth()

  const currentUser = authContext?.currentUser

  /**
   * Dashboard will have two modes
   *     -> expanded
   *     -> minimized
   * -> expanded - it will have
   *      -> the top horizontal line will have logo, name, logout button
   *      -> on left most side `ALl time` and `This month`
   *      -> a graph (line chart)
   *      -> a graph (pie chart)
   *      -> an upward arrow at the bottom to minimize the Dashboard
   * -> minimized - it will be similar to a navbar
   *    -> will have a `All time` expense, `This month` expense, name and logout button
   *    -> a downward arrow at the bottom to expand the Dashboard
   */

  return (
    <div className="flex-1 w-screen bg-gray-100 p-2 relative" >
      <nav>
        This is navbar
      </nav>

      {currentUser?.displayName}
      <button
        className="text-red-500 border border-red-500 px-2 py-1 m-1 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out"
        type="button"
        onClick={() => authContext?.logout()}
      >
        logout
      </button>
    </div>
  )
}

export default Dashboard