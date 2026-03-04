import { useDispatch, useSelector } from "react-redux";
import { addSale } from "../redux/slice/stockSlice";
import { useState } from "react";

export default function AddSale() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.stockReducer.products);
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSale = () => {
        if (!productId || !quantity) return;
        dispatch(addSale({
            productId: Number(productId),
            quantity: Number(quantity)
        }));
        setQuantity("");
    };

    return (
        <div className="card">
            <h3>Record Sale</h3>
            <select value={productId} onChange={e => setProductId(e.target.value)}>
                <option value="">Select Product</option>
                {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                ))}
            </select>
            <input
                placeholder="Quantity"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />

            <button onClick={handleSale}>Sell</button>
        </div>
    );
}