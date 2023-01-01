import React,{useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'


const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2020')

    const saveYearDataHandler = (enteredYearData) => {
        setFilteredYear(enteredYearData);
        props.moveYearUp(enteredYearData)
    }

    

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSaveYearData={saveYearDataHandler}  />
                {props.expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    )
}


export default Expenses;