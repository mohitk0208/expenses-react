import { expense } from "../../types/expense.types"

interface ExpenseProps {
  expense: expense
}

const Expense: React.FC<ExpenseProps> = ({ expense }) => {

  return (
    <div className="flex border rounded-md py-1 px-3 my-1 shadow-md " >
      <div className="flex-1" >
        <p className="text-xs font-bold text-gray-600/80" >{expense.created}</p>
        <p className="text-sm sm:text-base" >
          {expense.spentOn}
        </p>
      </div>
      <div className="w-14 font-bold flex items-center justify-center sm:text-xl " >
        &#8377; {`${expense.amount}`}
      </div>
    </div>
  )
}

export default Expense