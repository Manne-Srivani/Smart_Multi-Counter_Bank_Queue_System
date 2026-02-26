

function WaitingList({queue}) {
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
    }

   const activeCustomers = () => {
    const customers = queue.filter(c => c.status === "waiting" || c.status === "serving");

    if (customers.length === 0)
      return <p className="empty-message">No Customers</p>;

    return customers.map(customer => (
      <div key={customer.id} className="customer-card">
        <div className="token-badge">
          #{customer.token}
        </div>

        <div className="customer-details">
          <h4>{customer.customerName}</h4>
          <p>{customer.service}</p>
          <p>{customer.citizen}</p>
        </div>

        <div
          className="status-badge"
          style={{ backgroundColor: getStatusColor(customer.status) }}
        >
          {customer.status}
        </div>
      </div>
    ));
  };

  return (
    <div className="waiting-container">
      <h2 className="waiting-title">Active Queue</h2>
      <div className="waiting-list">
        {activeCustomers()}
      </div>
    </div>
  );
}

export default WaitingList
