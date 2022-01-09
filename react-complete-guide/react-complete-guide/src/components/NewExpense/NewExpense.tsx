import { ExpenseForm } from './ExpenseForm';
import './NewExpense.scss';

export const NewExpense = () => {
  const onAddExpense = (expenseData: any) => {};
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={onAddExpense} />
    </div>
  );
};
