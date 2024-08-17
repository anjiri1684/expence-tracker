import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  return (
    <>
      <h1>Expense Tracker</h1>
      <NewExpense />
      <Expenses />
    </>
  );
}

export default App;
