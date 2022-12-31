import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnterTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // })

    // setUserInput((userInput)=>{

    //   return {
    //     ...userInput,
    //     enterTitle: event.target.value,
    //   }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // })

    // setUserInput((prevState)=>{

    //   return {
    //     ...prevState,
    //     enterAmount: event.target.value,
    //   }
    // })
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // })

    // setUserInput((prevState)=>{

    //   return {
    //     ...prevState,
    //     enterDate: event.target.value,
    //   }
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    setEnterAmount("");
    setEnterTitle("");
    setEnterDate("");

    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Anount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
