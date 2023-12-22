import './App.css';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const dummy_expenses = [
  {id: 'e1', date: new Date(2021, 2, 28), title: 'New Tv', amount: 799.99 },
  {id: 'e2', date: new Date(2021, 3, 8), title: 'Car Insurance', amount: 294.67 },
  {id: 'e3', date: new Date(2021, 4, 12), title: 'A Book', amount: 94.99 },
  {id: 'e4', date: new Date(2021, 5, 21), title: 'Car Insurance', amount: 294.64 },
  {id: 'e4', date: new Date(2022, 1, 18), title: 'Phone', amount: 1200.00 }
]

const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
