import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ViewProducts() {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const { products, threshold } = useSelector(
        (state) => state.stockReducer
    );
    const navigate = useNavigate();
    const [filter, setFilter] = useState("");

    const filteredProducts = products.filter((product) => {

        const matchName = product.name
            .toLowerCase()
            .includes(filter.toLowerCase());

        const matchMin =
            minPrice === "" || product.price >= Number(minPrice);

        const matchMax =
            maxPrice === "" || product.price <= Number(maxPrice);

        return matchName && matchMin && matchMax;
    });

    return (
        <div className="container mt-4">
            <h2>Products</h2>

            <input
                placeholder="Search product..."
                onChange={(e) => setFilter(e.target.value)}
            />

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>

                <input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

            </div>

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Sold</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>
                                ₹{product.minPrice} - ₹{product.maxPrice}
                            </td>
                            <td>
                                {product.stock}
                                {product.stock <= threshold && (
                                    <span style={{ color: "red" }}> (Low Stock!)</span>
                                )}
                            </td>
                            <td>{product.sold}</td>
                            <td>
                                <button onClick={() => navigate("/addsale")}>
                                    Sell
                                </button>
                                <button onClick={() => navigate(`/edit/${product.id}`)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewProducts;