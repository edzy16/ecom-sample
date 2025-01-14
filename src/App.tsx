import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "./features/counter/cartSlice";
import { AppDispatch, RootState } from "./redux/store";

const App: React.FC = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>E-commerce App</h1>
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button
                onClick={() => dispatch(decrementQuantity(product.id))}
                style={{ padding: "5px 10px" }}
              >
                -
              </button>
              <span>Quantity: {product.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(product.id))}
                style={{ padding: "5px 10px" }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
