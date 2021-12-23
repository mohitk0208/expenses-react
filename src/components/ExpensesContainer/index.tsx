import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { expense } from "../../types/expense.types"
import { GET_EXPENSES_BY_CATEGORY_ID } from "../../utils/endpoints"
import Expense from "./Expense"

const ExpensesContainer = () => {
  const [expenses, setExpenses] = useState<expense[]>([])
  const [loading, setLoading] = useState(false)

  const { currentUser } = useAuth()
  const { categoryId } = useParams()

  useEffect(() => {
    async function fetchExpenses() {

      try {
        setLoading(true)
        const res = await fetch(GET_EXPENSES_BY_CATEGORY_ID(currentUser?.uid, categoryId))
        const resData = await res.json()

        if (res.ok) {
          setExpenses(resData)
        }

      }
      catch (err) {
        console.log(err)
      }
      finally {
        setLoading(false)
      }

    }

    fetchExpenses()

  }, [currentUser, categoryId])

  console.log(expenses)

  return (
    <div>
      {expenses.map(expense => {
        return <Expense key={expense.id} expense={expense} />
      })}
    </div>
  )

}

export default ExpensesContainer