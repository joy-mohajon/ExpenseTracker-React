import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expenses/Expense";
import "./App.css";

const dummy_expense = [
  { id: "e1", title: "Toilet Pepar", amount: 94.2, date: new Date(2020, 3, 5) },
  { id: "e2", title: "Mac", amount: 800, date: new Date(2021, 2, 15) },
  { id: "e3", title: "Range Rover", amount: 2000, date: new Date(2021, 4, 2) },
  { id: "e4", title: "Air pot", amount: 10.2, date: new Date(2020, 5, 5) },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expense);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  /* jsx language */
  return (
    <div className="App">
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );

  /* Babel compiler transform jsx language to browser understable language */

  /* return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "header",
      { className: "App-header" },
      React.createElement("h2", {}, "Let's Start")
    ),
    React.createElement(Expense, {items: expense})
  );
  */
}

export default App;
