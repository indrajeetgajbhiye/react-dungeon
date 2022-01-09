import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.scss';
/**
 * Add two numbers.
 * @param {any} props The first number.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function ExpenseItem(props: any) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click!</button>
    </Card>
  );
}
