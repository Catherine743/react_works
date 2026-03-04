import './App.css'
import AddProduct from "./Components/AddProduct";
import AddSale from "./Components/AddSale";
import Dashboard from "./Components/Dashboard";
function App() {

  return (
    <>
      <div className="app-container">
        <h1 className="main-title">Smart Inventory System</h1>

        <div className="card-container">
          <AddProduct />
          <AddSale />
        </div>

        <Dashboard />
      </div>
    </>
  )
}

export default App
