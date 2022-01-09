/* eslint-disable require-jsdoc */

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
/**
 * @param {any} props
 * @return {JSX.Element}
 */

export default function ExpenseList(props: any) {
  const expenses = props.expenses;
  return (
    <Card>
      {expenses.map((element: any, index: number) => {
        return (
          <Card key={index}>
            <ExpenseItem
              title={element.title}
              amount={element.amount}
              date={element.date}
            />
          </Card>
        );
      })}
    </Card>
  );
}
