import { useEffect, useState } from "react"
import Category from "./Category"
import { category } from "../../types/category.types"
import { useAuth } from "../../context/AuthContext"
import { GET_CATEGORIES } from "../../utils/endpoints"

const CategoriesContainer = () => {
  const [categories, setCategories] = useState<category[]>([])
  const [loading, setLoading] = useState(true)

  const { currentUser } = useAuth()

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true)
        const res = await fetch(GET_CATEGORIES(currentUser?.uid))
        const resData = await res.json()

        if (res.ok) {
          setCategories(resData?.expenseCategories)
        }

      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }
    }

    fetchCategories()


  }, [currentUser])

  return (
    <div className="px-[5%] divide-y " >
      <div className="pb-2" >
        <h1 className="font-bold text-xl text-center" >Categories</h1>
      </div>


      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto py-5" >
        {loading ? <p>
          loading...
        </p> : (
          categories.map(category => {

            return <Category key={category.id} category={category} />

          })
        )}
      </div>
    </div>


  )

}

export default CategoriesContainer