import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./Components/AddProduct";
import AddSale from "./Components/AddSale";
import Dashboard from "./Components/Dashboard";
import EditProduct from "./Components/EditProduct";
import ViewProducts from "./Components/ViewProducts";
import Header from "./Components/Header"
function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ViewProducts />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/addsale" element={<AddSale />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
