import { useState } from 'react';
import './ExpenseForm.scss';
export const ExpenseForm = (props: any) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: new Date(''),
  });
  const titleChangeHandler = (event: any) => {
    setUserInput((previousState) => {
      return { ...previousState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event: any) => {
    setUserInput((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event: any) => {
    setUserInput((previousState) => {
      return { ...previousState, date: new Date(event.target.value) };
    });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onSaveData(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0"
            max="100"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
