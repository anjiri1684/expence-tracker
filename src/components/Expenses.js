import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date("2020, 2, 28"),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 200.89,
      date: new Date("2021, 2, 28"),
    },
    {
      id: "e3",
      title: "Book",
      amount: 20.0,
      date: new Date("2022, 2, 28"),
    },
    {
      id: "e4",
      title: "Car",
      amount: 1000.0,
      date: new Date("2023, 2, 28"),
    },
    {
      id: "e5",
      title: "Phone",
      amount: 500.0,
      date: new Date("2024, 2, 28"),
    },
  ];
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
