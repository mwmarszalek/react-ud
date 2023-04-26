import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 4.99,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 50,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Macbook Pro',
    amount: 1650,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Bread',
    amount: 1.29,
    date: new Date(2022, 5, 12),
  },

  {
    id: 'e6',
    title: 'Sweetcorn',
    amount: 2.99,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e7',
    title: 'Exercise Bike',
    amount: 490,
    date: new Date(2019, 4, 12),
  },

];



const App = () => {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredExpenses,setFilteredExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses]
    });
  }

 

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} filteredExpenses={filteredExpenses}  />
    </div>
  );
}

export default App;
