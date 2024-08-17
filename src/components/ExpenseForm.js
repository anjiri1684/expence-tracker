import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
  }

  function dateEnteredHandler(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
  }

  function AmountEnteredHandler(e) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const expenseDate = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };

    console.log(expenseDate);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Enter Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
          id="title"
          name="title"
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2023-01-01"
          max="2025-02-01"
          value={userInput.enteredDate}
          onChange={dateEnteredHandler}
          id="date"
          name="date"
        />
      </div>
      <div className="new-expense__control">
        <label>Enter Amount</label>
        <input
          type="number"
          id="amount"
          name="date"
          value={userInput.enteredAmount}
          onChange={AmountEnteredHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
