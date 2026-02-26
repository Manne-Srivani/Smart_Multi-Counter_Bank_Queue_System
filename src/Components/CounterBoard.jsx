function CounterBoard({ queue, onServe }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "#facc15";
      case "serving":
        return "#22c55e";
      case "completed":
        return "#3b82f6";
      default:
        return "#ffffff";
    }
  };

  const renderCounter = (serviceName) => {
    const customer = queue.find(c => c.status === "serving" && c.service === serviceName);
    if (!customer) return <p className="free-status">Free</p>;

    return (
      <div className="counter-customer">
        <div className="token-badge">#{customer.token}</div>
        <div className="customer-info">
          <h4>{customer.customerName}</h4>
        </div>
        <div
          className="status-badge"
          style={{ backgroundColor: getStatusColor(customer.status) }}
        >
          {customer.status}
        </div>
      </div>
    );
  };

  return (
    <div className="counter-board">
      <h2 className="counter-title">Counters</h2>

      <div className="counter-item">
        <h3>Deposit Counter</h3>
        {renderCounter("Deposit")}
        <button onClick={() => onServe("Deposit")} className="serve-btn">
          Serve Next
        </button>
      </div>

      <div className="counter-item">
        <h3>Withdrawal Counter</h3>
        {renderCounter("Withdrawal")}
        <button onClick={() => onServe("Withdrawal")} className="serve-btn">
          Serve Next
        </button>
      </div>

      <div className="counter-item">
        <h3>Account Opening Counter</h3>
        {renderCounter("Account Opening")}
        <button onClick={() => onServe("Account Opening")} className="serve-btn">
          Serve Next
        </button>
      </div>
    </div>
  );
}

export default CounterBoard;