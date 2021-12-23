import { expense } from "../../types/expense.types"

interface ExpenseProps {
  expense: expense
}

const Expense: React.FC<ExpenseProps> = ({ expense }) => {

  return (
    <div>
      This is expense
    </div>
  )
}

export default Expense