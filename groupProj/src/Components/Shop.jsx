import { useSelector, useDispatch } from "react-redux";
import { addSale } from "../redux/slice/stockSlice";
import { useState } from "react";

function Shop() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.stockReducer.products);

  const [customer, setCustomer] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const selectedProduct = products.find(
    (p) => p.id === Number(productId)
  );

  const totalAmount =
    selectedProduct && quantity
      ? selectedProduct.price * Number(quantity)
      : 0;

  const handlePurchase = () => {

    if (!customer || !productId || !quantity) {
      setMessage("Please fill all fields");
      return;
    }

    if (Number(quantity) > selectedProduct.stock) {
      setMessage("Not enough stock available");
      return;
    }

    dispatch(
      addSale({
        customer,
        productId: Number(productId),
        quantity: Number(quantity),
        totalAmount,
        date: new Date().toISOString()
      })
    );

    setMessage("Purchase successful");

    setCustomer("");
    setProductId("");
    setQuantity("");
  };

  return (
    <div className="card">

      <h3>Purchase Product</h3>

      {/* Customer Name */}
      <input
        placeholder="Customer Name"
        value={customer}
        onChange={(e)=>setCustomer(e.target.value)}
      />

      {/* Product Select */}
      <select
        value={productId}
        onChange={(e)=>setProductId(e.target.value)}
      >
        <option value="">Select Product</option>

        {products.map((p)=>(
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}

      </select>

      {/* Product Info */}
      {selectedProduct && (
        <div>
          <p>Price: ₹{selectedProduct.price}</p>
          <p>Available Stock: {selectedProduct.stock}</p>
        </div>
      )}

      {/* Quantity */}
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e)=>setQuantity(e.target.value)}
      />

      {/* Total */}
      {totalAmount > 0 && (
        <p>Total Amount: ₹{totalAmount}</p>
      )}

      <button onClick={handlePurchase}>
        Purchase
      </button>

      {message && <p>{message}</p>}

    </div>
  );
}

export default Shop;