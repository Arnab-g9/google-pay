export default function SplitExpenseFormContainer({ children }) {
  return (
    <form className="split-expense-form-container">
      <div className="sections">
        <i className="ri-group-3-fill icon"></i>
        <p className="icon">123</p>
        <i className="ri-pie-chart-2-line icon"></i>
        <i className="ri-percent-line icon"></i>
      </div>
      <div className="what-for">
        <input type="text" placeholder="what's this for ?" />
      </div>
      {children}
      <button>Send Request</button>
    </form>
  );
}
