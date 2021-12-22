import { useAuth } from "../../context/AuthContext"

function Dashboard() {

  const { currentUser, logout } = useAuth()

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
    <div className="flex-1 w-screen relative flex flex-col" >
      <nav className="flex items-center justify-between bg-gray-200 py-1 px-5 shadow-sm">
        <div>
          <h1 className="font-bold" >
            Expense Tracker
          </h1>
        </div>

        <div className="flex items-center gap-3" >
          <p>{currentUser?.displayName}</p>
          <button
            className="text-red-500 border border-red-500 px-2 py-1 m-1 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out"
            type="button"
            onClick={() => logout()}
          >
            logout
          </button>
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-around h-full lg:w-11/12  mx-auto bg-blue-300" >
        <div className=" w-72 bg-gray-500 h-48 " >

        </div>
        <div className=" w-72 bg-gray-500 h-48" >

        </div>
        <div className=" w-72 bg-gray-500 h-48" >

        </div>
      </div>

    </div >
  )
}

export default Dashboard