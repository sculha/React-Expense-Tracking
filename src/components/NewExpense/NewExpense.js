import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={()=> setIsEditing(true)}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={()=> setIsEditing(false)}/>}
        </div>
    )
}

export default NewExpense;