import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../redux/slice/stockSlice";
import { useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
  state.stockReducer.products.find(
    (item) => item.id === Number(id)
  )
);

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleUpdate = () => {
    dispatch(
      updateProduct({
        id: Number(id),
        name,
        price: Number(price),
        stock: Number(stock),
        sold: product.sold,
      })
    );
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Edit Product</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <input value={stock} onChange={(e) => setStock(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditProduct;