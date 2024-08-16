import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-Us", {
    month: "long",
  });
  const day = props.date.toLocaleString("en-Us", {
    day: "numeric",
  });
  const year = props.date.toLocaleString("en-Us", {
    year: "numeric",
  });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
