function CompletedCustomers({ queue }) {
  const completed = queue.filter(customer => customer.status === "Completed");

  if (completed.length === 0) return <p>No Completed Customers</p>;

  return (
    <div className="completed-list">
      <h2>Completed Customers</h2>
      {completed.map(customer => (
        <div key={customer.id} className="completed-card">
          <h4>Token #{customer.token}</h4>
          <h5>{customer.customerName}</h5>
          <p>Service: {customer.service}</p>
          <p>Citizen: {customer.citizen}</p>
        </div>
      ))}
    </div>
  );
}

export default CompletedCustomers;