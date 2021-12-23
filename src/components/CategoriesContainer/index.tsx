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
          console.log(resData)
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
    <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto py-5" >
      {loading ? <p>
        loading...
      </p> : (
        categories.map(category => {

          return <Category key={category.id} category={category} />

        })
      )}
    </div>
  )

}

export default CategoriesContainer