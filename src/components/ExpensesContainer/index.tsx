import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { expenseResponse } from "../../types/expense.types"
import { GET_EXPENSES_BY_CATEGORY_ID } from "../../utils/endpoints"
import Expense from "./Expense"

const ExpensesContainer = () => {
  const [expenses, setExpenses] = useState<expenseResponse[]>([])
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
          setExpenses(resData as expenseResponse[])
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
    <div className="px-[5%] divide-y" >
      <div className="pb-2">
        <h1 className="font-bold text-xl text-center" >
          Expenses
        </h1>
      </div>
      <div className=" max-w-xl min-w-[250px] w-5/6 mx-auto pb-8" >
        {loading ? (
          <p>
            loading ...
          </p>
        ) : (
          expenses.map(expense => {
            return <Expense key={expense.id} expense={expense} />
          })
        )}

      </div>
    </div>
  )

}

export default ExpensesContainer