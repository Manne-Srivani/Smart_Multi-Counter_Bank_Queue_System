import { useState } from "react"
import DashboardStats from "./Components/DashboardStats"
import QueueForm from "./Components/QueueForm"
import WaitingList from "./Components/WaitingList";
import CounterBoard from "./Components/CounterBoard";
import './App.css';
import CompletedCustomers from "./Components/CompletedCustomers";

function App() {
  const [queue, setQueue] = useState([]);
  const [token, setToken] = useState(100);

  const addToQueue  = (customer) =>{
    setQueue(prev => [
     ...prev,
    { ...customer, id: Date.now(), token: token, status: "waiting" }
    ]);
    setToken(prev => prev + 1)
  };
  

  const updateStatus = (id, newStatus) => {
   setQueue(prevQueue =>
   prevQueue.map(customer =>
    customer.id === id 
      ? { ...customer, status: newStatus }
      : customer
  )
);
  };

  const serveNextCustomer = (serviceType) =>{
    setQueue(prevQueue => {
      let updatedQueue = [...prevQueue]
      const servingCustomer = updatedQueue.find(c => c.status === "serving" && c.service === serviceType);
      if(servingCustomer) {
        updatedQueue = updatedQueue.map(customer => customer.id === servingCustomer.id ? {...customer, status: "completed"} : customer);
      }
      const seniorCustomer = updatedQueue.find(c => c.status === "waiting" && c.service === serviceType && c.citizen ==="Senior Citizen");
      const normalCustomer = updatedQueue.find(c => c.status === "waiting" && c.service === serviceType && c.citizen ==="Normal");
      const customerToServe = seniorCustomer || normalCustomer;
      if (!customerToServe) return updatedQueue;

      return updatedQueue.map(customer => customer.id === customerToServe.id ? {...customer, status: "serving"} : customer)
    })
  }


 return (
  <div className="app-container">
    <header className="app-header">
      <h1>Smart Multi-Counter Bank Queue System</h1>
    </header>

    <main className="app-main">
      <div className="dashboard-wrapper">
        <DashboardStats queue={queue} />
      </div>

      <div className="content-section">
        <QueueForm onAdd={addToQueue} />
        <WaitingList queue={queue} onUpdateStatus={updateStatus} />
        <CounterBoard queue={queue} onServe={serveNextCustomer} />
        <CompletedCustomers queue={queue} />
      </div>
    </main>
  </div>
);
}

export default App
