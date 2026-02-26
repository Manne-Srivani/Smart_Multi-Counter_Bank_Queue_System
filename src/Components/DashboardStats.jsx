
function DashboardStats({ queue }) {

  const total = queue.length;

  const waiting = queue.filter(customer => customer.status === "waiting").length;
  const serving = queue.filter(customer => customer.status === "serving").length;
  const completed = queue.filter(customer => customer.status === "completed").length;

  const depositCount = queue.filter(customer => customer.service === "Deposit").length;
  const withdrawalCount = queue.filter(customer => customer.service === "Withdrawal").length;
  const accountOpeningCount = queue.filter(customer => customer.service === "Account Opening").length;

  
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard Overview</h2>

      <div className="stats-grid">
        <div className="stat-card total">
          <h4>Total Customers</h4>
          <p>{total}</p>
        </div>

        <div className="stat-card waiting">
          <h4>Waiting</h4>
          <p>{waiting}</p>
        </div>

        <div className="stat-card serving">
          <h4>Serving</h4>
          <p>{serving}</p>
        </div>

        <div className="stat-card completed">
          <h4>Completed</h4>
          <p>{completed}</p>
        </div>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <h4>Deposit</h4>
          <p>{depositCount}</p>
        </div>

        <div className="service-card">
          <h4>Withdrawal</h4>
          <p>{withdrawalCount}</p>
        </div>

        <div className="service-card">
          <h4>Account Opening</h4>
          <p>{accountOpeningCount}</p>
        </div>
      </div>
    </div>
  );
}
export default DashboardStats;