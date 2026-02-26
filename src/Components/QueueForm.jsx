import { useState } from "react"

function QueueForm({onAdd}) {
    const[customerName, setCustomerName] = useState('');
    const[service, setService] = useState('');
    const[citizen, setCitizen] = useState("Normal");

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!customerName.trim() || !service.trim()) return 
        onAdd( {customerName, service, citizen})
        setCustomerName('')
        setService('')
        setCitizen('Normal')
    }
  return (
    <div className="form-container">
      <h2 className="form-title"> Add Customer</h2>

      <form onSubmit={handleSubmit} className="queue-form">
        <div className="form-group">
          <label htmlFor="customerName">Customer Name *</label>
          <input
            id="customerName"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type *</label>
          <select
            id="serviceType"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select service type</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Account Opening">Account Opening</option>
          </select>
        </div>

        <div className="radio-group">
            <input
              id="normalCitizen"
              name="citizen"
              value="Normal"
              checked={citizen === "Normal"}
              onChange={(e) => setCitizen(e.target.value)}
              type="radio"
            />
            <label htmlFor="normalCitizen" className="radio-option">
              Normal
            </label>

            <input
              id="seniorCitizen"
              name="citizen"
              value="Senior Citizen"
              checked={citizen === "Senior Citizen"}
              onChange={(e) => setCitizen(e.target.value)}
              type="radio"
            />
            <label htmlFor="seniorCitizen" className="radio-option">
            Senior Citizen
          </label>
        </div>

        <button type="submit" className="submit-btn">
           Generate Token
        </button>
      </form>
    </div>
  );
}

export default QueueForm
